from manimlib import *
import numpy as np


class CustomVector(Arrow):
    CONFIG = {
        "buff": 0,
    }

    def __init__(self, origin=ORIGIN, direction=RIGHT, **kwargs):
        if len(direction) == 2:
            direction = np.hstack([direction, 0])
        super().__init__(origin, direction, **kwargs)


class LagrangeMultipliers2DScene(Scene):
    def construct(self):
        # constants
        BLUE_SUBTYPES = [
            BLUE_A,
            BLUE_B,
            BLUE_C,
            BLUE_D,
            BLUE_E
        ]

        SHORT_WAIT_TIME = 0.1 # 1
        STANDARD_WAIT_TIME = 1 # 4
        LONG_WAIT_TIME = 2  # 10

        # write text
        problem_statement_text = TexText(
            """We are interested in finding \n
            a conditional minimum of an implicit function\n
            $f(x,y) = x^2 - y$\n,
            conditioned on $g(x,y) = y - x = 0$.
            """,
            color=BLACK
        )
        problem_statement_text.fix_in_frame()
        problem_statement_text.to_edge(UP)
        self.play(Write(problem_statement_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(problem_statement_text))

        # let us draw text
        let_us_draw_text = TexText(
            """Let us draw contour levels of the function $f(x, y)$.""",
            color=BLACK
        )
        let_us_draw_text.fix_in_frame()
        let_us_draw_text.to_edge(UP)
        self.play(Write(let_us_draw_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(let_us_draw_text))

        # construct coordinate axes
        axes_width_and_height = min(FRAME_HEIGHT, FRAME_WIDTH) - 1
        axes = Axes(
            (-3, 10), (-3, 10),
            x_axis_config={"include_tip": True}, y_axis_config={"include_tip": True},
            height=axes_width_and_height, width=axes_width_and_height
        )
        axes.add_coordinate_labels(
            font_size=10,
            num_decimal_places=1,
        )
        self.add(axes)
        labels = axes.get_axis_labels(x_label_tex='x', y_label_tex='y').set_color(GREY)
        self.add(labels)

        # draw contour levels
        for index, i in enumerate(np.linspace(-1, 3, 5)):
            parabola = axes.get_graph(lambda x: i + x**2)
            parabola.set_stroke(BLUE_SUBTYPES[index])

            parabola_label = axes.get_graph_label(parabola, f"f(x,y) = x^2 - y = {i}")
            parabola_label.set_bstroke(color=WHITE, width=50)
            self.play(ShowCreation(parabola), FadeIn(parabola_label, RIGHT))
            self.wait(SHORT_WAIT_TIME)
            self.play(FadeOut(parabola_label))

        # draw gradients text
        draw_gradients_text = TexText(
            """Let us consider gradient vectors of $f(x, y): (\\frac{\\partial{f}}{\\partial{x}}, \\frac{\\partial{f}}{\\partial{y}}) = (2x, -1)$.""",
            color=BLACK
        )
        draw_gradients_text.fix_in_frame()
        draw_gradients_text.to_edge(UP)
        draw_gradients_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(draw_gradients_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(draw_gradients_text))

        # draw gradient vectors
        for index, i in enumerate(np.linspace(-1, 3, 5)):
            dot = Dot(color=BLUE_SUBTYPES[index])
            dot.move_to(axes.c2p(1, 1+i))
            self.play(FadeIn(dot, scale=0.5))

            origin = axes.coords_to_point(1, 1+i)
            direction = axes.coords_to_point(1 + 2, 1+i - 1)
            gradient_vector = CustomVector(origin=origin, direction=direction, stroke_color=BLUE_SUBTYPES[index])

            self.play(ShowCreation(gradient_vector))

        # show constraint text
        constraint_text = TexText(
            """Now consider the condition\n
            $g(x, y) = y - x: (\\frac{\\partial{g}}{\\partial{x}}, \\frac{\\partial{g}}{\\partial{y}}) = (-1, 1)$\n
            and its gradients
            """,
            color=BLACK,
            background=WHITE
        )
        constraint_text.fix_in_frame()
        constraint_text.to_edge(UP)
        constraint_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(constraint_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(constraint_text))

        # draw g(x, y)
        constraint = axes.get_graph(lambda x: x)
        constraint.set_stroke(RED)
        self.play(ShowCreation(constraint))

        constraint_label = axes.get_graph_label(constraint, f"g(x,y) = x - y = 0")
        constraint_label.set_bstroke(color=WHITE, width=50)
        self.play(FadeIn(constraint_label, RIGHT))
        self.wait(SHORT_WAIT_TIME)
        self.play(FadeOut(constraint_label))

        # draw g(x, y) derivative
        dot = Dot(color=RED)
        dot.move_to(axes.c2p(0.5, 0.5))
        self.play(FadeIn(dot, scale=0.5))

        origin = axes.coords_to_point(0.5, 0.5)
        direction = axes.coords_to_point(0.5 - 1, 0.5 + 1)
        gradient_vector = CustomVector(origin=origin, direction=direction, stroke_color=RED)

        self.play(ShowCreation(gradient_vector))

        # show Lagrange solution text
        lagrange_solution_text = TexText(
            """Instead of finding the minimum of function $f(x, y)$\n
            we are now minimizing Lagrangian function defined as\n
            $\\mathcal{L}(x, y, \\lambda) = f(x, y) + \\lambda g(x, y)$""",
            color=BLACK,
            background=WHITE
        )
        lagrange_solution_text.fix_in_frame()
        lagrange_solution_text.to_edge(UP)
        lagrange_solution_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(lagrange_solution_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(lagrange_solution_text))

        # show Lagrange multipliers solution text 2
        lagrange_solution_2_text = TexText(
            """The optimum of $\\mathcal{L}(x, y, \\lambda)$ is achieved \n
            at such a point of $g(x, y) = 0$, where\n
            $\\nabla_{x,y} \\mathcal{L}(x, y, \\lambda) = 0 = \\nabla_{x, y} f(x, y) + \\lambda \\nabla_{x, y} g(x, y)$
            """,
            color=BLACK,
            background=WHITE
        )
        lagrange_solution_2_text.fix_in_frame()
        lagrange_solution_2_text.to_edge(UP)
        lagrange_solution_2_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(lagrange_solution_2_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(lagrange_solution_2_text))

        # show Lagrange multipliers solution text 3
        lagrange_solution_3_text = TexText(
            """Equivalently, you could say\n
            $\\nabla_{x ,y, \\lambda} \\mathcal{L}(x, y, \\lambda) = 0$ is a sufficient condition,\n
            because $\\frac{\partial \\mathcal{L}(x, y, \\lambda)}{\\partial \\lambda} = 0 \\iff g(x, y) = 0$.
            """,
            color=BLACK,
            background=WHITE
        )
        lagrange_solution_3_text.fix_in_frame()
        lagrange_solution_3_text.to_edge(UP)
        lagrange_solution_3_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(lagrange_solution_3_text))
        self.wait(LONG_WAIT_TIME)
        self.play(FadeOut(lagrange_solution_3_text))

        # show Lagrange multipliers solution text 4
        lagrange_solution_4_text = TexText(
            """Find the minimum of Lagrangian:\n
$\\begin{cases} \\frac{\\partial{\\mathcal{L}} }{\\partial{x} }: 2 x - \\lambda = 0 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{y} }: -1 + \\lambda = 0 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{\\lambda} }: y = x \\end{cases} \\Rightarrow \\begin{cases} \\frac{\\partial{\\mathcal{L}} }{\\partial{x} }: x = \\lambda/2 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{y} }: \\lambda = 1 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{\\lambda} }: y = x \\end{cases} \\Rightarrow$\n
$\\Rightarrow \\begin{cases} \\frac{\\partial{\\mathcal{L}} }{\\partial{x} }: x = 1/2 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{y} }: \\lambda = 1 \\\\ \\frac{\\partial{\\mathcal{L}} }{\\partial{\\lambda} }: y = 1/2 \\end{cases}$
            """,
            color=BLACK,
            background=WHITE
        )
        lagrange_solution_4_text.fix_in_frame()
        lagrange_solution_4_text.to_edge(UP)
        lagrange_solution_4_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(lagrange_solution_4_text))
        self.wait(LONG_WAIT_TIME)
        self.play(FadeOut(lagrange_solution_4_text))

        # draw the optimal parabola
        parabola = axes.get_graph(lambda x: x ** 2 + 0.25)
        parabola.set_stroke(BLUE)

        parabola_label = axes.get_graph_label(parabola, f"f(x,y) = x^2 - y = -0.25")
        parabola_label.set_bstroke(color=WHITE, width=50)
        self.play(ShowCreation(parabola), FadeIn(parabola_label, RIGHT))
        self.wait(SHORT_WAIT_TIME)
        self.play(FadeOut(parabola_label))

        # draw the gradient of the optimal parabola
        dot = Dot(color=BLUE)
        dot.move_to(axes.c2p(0.5, 0.5))
        self.play(FadeIn(dot, scale=0.5))

        origin = axes.coords_to_point(0.5, 0.5)
        direction = axes.coords_to_point(0.5 + 0.5 * 2, 0.5 - 1)
        gradient_vector = CustomVector(origin=origin, direction=direction, stroke_color=BLUE)

        self.play(ShowCreation(gradient_vector))

        # show Lagrange multipliers solution text 5
        lagrange_solution_5_text = TexText(
            """In 2D case the gradients of $g(x, y)$ and $f(x, y)$\n
            are parallel or anti-parallel at the point of optimum.
            """,
            color=BLACK,
            background=WHITE
        )
        lagrange_solution_5_text.fix_in_frame()
        lagrange_solution_5_text.to_edge(UP)
        lagrange_solution_5_text.set_bstroke(color=WHITE, width=50)
        self.play(Write(lagrange_solution_5_text))
        self.wait(STANDARD_WAIT_TIME)
        self.play(FadeOut(lagrange_solution_5_text))


if __name__ == '__main__':
    scene = LagrangeMultipliers2DScene()

    # Here is the extra step if you want to also open
    # the movie file in the default video player
    # (there is a little different syntax to open an image)
    scene.renderer.file_writer.movie_file_path
