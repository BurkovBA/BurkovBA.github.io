---
title: Moscow digital parliament elections-2021 audit
date: "2021-09-24T00:00:00.284Z"
tags: ["people", "programming"]
cover: "./Pamfilova_Venediktov.jpeg"
description: Parliament elections in 2021 in Moscow were held in a double format - in-person voting with paper ballots and distant electronic voting (DEG) with digital ballots. According to the in-person voting, the ruling party "United Russia" (EdRo) had 30.1% of votes and lost elections in Moscow to opposition with the closest competitor being the "Communist Party of Russian Federation" (KPRF) with 30.4%. However, according to the electronic voting it has won by a huge margin of ~45% to ~19% over communists and thanks to the electronic ballots holds an overall victory. There are well-grounded suspicions that electronic voting system could have been rigged. Moscow Government Department of IT (a.k.a. DIT) has open-sourced the codebase, used to hold this voting, and I took the time to inspect it. This post is dedicated to the analysis of its architecture.
---

Apropos: huge thanks to Moscow DIT
----------------------------------

First things first, I want to say huge "thank you" to the Moscow Government Department of IT (DIT) that took the responsibility to open-source the codebase for voting, provided a publicly available SQL dump of the public blockchain and took their time to explain the architecture of the voting system.


Logical architecture
--------------------

 - SUDIR - external system, System of Access Control to Information Resources of Moscow Government; used to authorize a user for voting
 - Blockchain 1 (public)
 - Blockchain 2 (private)
 - Form
 - MDM (Master Data Management)
 - Ballots
 - Component X
 - Encryptor
 - Key generator


Codebase architecture
---------------------

Below is the bird-eye-view of the codebase structure. I supply the code tree with comments and programming language/frameworks in parentheses:

```
├── blockchain
│   ├── dit-blockchain-private-source - source code of the private blockchain (BC2) (Rust/Cargo/Exonum)
│   ├── dit-blockchain-source - source code of the public blockchain (BC1) (Rust/Cargo/Exonum)
│   ├── frontend-library-source - frontend library for interaction with blockchains (Javascript)
│   └── key-generator-source - ???
└── form
    ├── ballot - this component gives away bulletins and receives encrypted filled-in bulleting; sends them into blockchains 1 and 2 through blockchain interface (PHP/Laravel/Lumen/Composer + Javascript + CSS)
    ├── componentX - ??? (PHP/Laravel/Lumen/Composer)
    ├── encryptor - ??? (PHP/Laravel/Lumen/Composer)
    └── form - main service, through which user applies for digital voting (PHP/Laravel/Lumen/Composer)
```


Protocol of election process as a callgraph
-------------------------------------------

1. User opens the participation confirmation form.

2. Form authorizes the user in SUDIR (System of Access Control to Information Resources of Moscow Government)

3. After authorization the Form performs a set of validations in [checkBallot](https://github.com/BurkovBA/blockchain-voting_2021/blob/main/form/form/src/app/Http/Controllers/Election.php#L30) service of MDM. 

4. MDM processes requests from Form and returns statuses of user's eligibility for voting.

5. Form returns the list of elections, in which the user has voting rights and return it to the user's browser.

6. User goes through the procedure of confirmation of his willingness to take part in elections, and the form returns him success/failure of confirmation procedure.

7. User presses the button "get a ballot" for a specific voting, he has voting rights for.

8. Form checks that the user is present in the list of those, allowed to participate in this specific voting through MDM's checkBallot method.

9. MDM processes the form's request about eligibility of the user's presence in the list of eligible for voting in this elections. 

10. Form sends a request to anonymization service to get an anonymized user id.


References
----------
 - https://habr.com/ru/post/579350/ - Habr paper by Peter Zhizhin, where he shows how to decrypt non-decrypted transactions in the public blockchain
 - https://habr.com/ru/post/574360/ - Habr paper on the architecture of digital electronic voting (DEG); not sure, if it is relevant, or not
 - https://observer.mos.ru/all/servers/1/txs - downloads page for the SQL dump of the public blockchain
 - https://www.mos.ru/city/projects/deg2021/ - Q&A page of the elections system
 - https://github.com/moscow-technologies/blockchain-voting_2021 - source code of the Moscow blockchain-based voting at the Moscow DIT github page 
 - https://exonum.com/doc/version/latest/architecture/services/ - Exonum blockchain documentation
 - https://github.com/exonum/exonum - exonum on github
 - https://ethereum.org/en/whitepaper/ - Ethereum whitepaper (just as a general reference to blockchain)
 - https://vitalik.ca/general/2021/05/25/voting2.html - Vitalik Buterin about blockchain-based voting systems
 - https://dspace.spbu.ru/bitstream/11701/26349/1/Kirillov_VKR.pdf - a random thesis from St.Petersburg State University about blockchain for election
 - https://mwc.kaspersky.com/files/Polys/Polys%20-%20online%20voting%20system%20-%20Whitepaper.pdf - a whitepaper of blockchain for voting by Kaspersky inc., who were involved in holding these elections
 - [Algorithm of votes counting](./Описание_алгоритма_подсчета_голосов.docx) - votes counting algorithm (in Russian, downloaded from workgroup Telegram channel)
 - [Protocol of DEG](./Протокол%20ДЭГ.pdf) - protocol of voting process (in Russian, downloaded from workgroup Telegram channel)