from manimlib import *
import numpy as np


class LagrangeDualScene(Scene):
    def construct(self):
        # construct coordinate axes
        axes_width_and_height = min(FRAME_HEIGHT, FRAME_WIDTH) - 1
        axes = Axes(
            (-10, 10), (-3, 10),
            x_axis_config={"include_tip": True}, y_axis_config={"include_tip": True},
            height=axes_width_and_height, width=axes_width_and_height
        )
        axes.add_coordinate_labels(
            font_size=10,
            num_decimal_places=1,
        )
        self.add(axes)
        labels = axes.get_axis_labels(x_label_tex='g(x)', y_label_tex='f(x)').set_color(GREY)
        self.add(labels)

        # bezier curve
        vertices = [
            axes.c2p(0, 8, 0),
            axes.c2p(2, 5, 0),
            axes.c2p(4, 4, 0),
            axes.c2p(2, 2, 0),
            axes.c2p(0, 4, 0),
            axes.c2p(-2, 5, 0),
            axes.c2p(-4, 4, 0),
            axes.c2p(-6, 6, 0),
        ]
        polygon = Polygon(*vertices, stroke_width=0, fill_opacity=1, fill_color=BLUE)
        self.add(polygon)
        self.wait()

        # dual line
        line_start = axes.c2p(-10, 6)
        line_end = axes.c2p(11, -1)
        line = DashedLine(start=line_start, end=line_end, color=RED)
        self.add(line)
        self.wait()

        # line label
        # line_label = Tex(f"f(x) = \Lambda - \lambda \cdot g(x)")
        # line_label.set_bstroke(color=RED, width=50)
        # line_label.arrange(RIGHT)
        # always(line_label.next_to, line, UP)
        # axes.add(line_label)

        # dot
        invisible_line = Line(start=axes.c2p(0, 0), end=axes.c2p(0, 2.66))
        dual_dot = Dot(color=RED, point=axes.c2p(0, 0))
        self.play(FadeIn(dual_dot, scale=0.5), MoveAlongPath(dual_dot, invisible_line))
        lambda_text = Tex("\max_{\lambda} \inf_x \mathcal{L}(x) = f(x) - \lambda^* g(x)")
        lambda_text.next_to(dual_dot, direction=LEFT)
        lambda_text.set_color(RED)
        self.add(lambda_text)
        self.wait(3)

        # f*(x) dot
        invisible_line = Line(start=axes.c2p(0, 0), end=axes.c2p(0, 2))
        dual_dot = Dot(color=GREEN, point=axes.c2p(0, 0))
        self.play(FadeIn(dual_dot, scale=0.5), MoveAlongPath(dual_dot, invisible_line))

        dual_line_start = axes.c2p(0, 2)
        dual_line_end = axes.c2p(2, 2)
        dual_line = DashedLine(start=dual_line_start, end=dual_line_end, color=GREEN)
        self.add(dual_line)
        self.wait()

        f_star_text = Tex("f(x^*): g(x^*) \ge 0" )
        f_star_text.next_to(dual_dot, direction=LEFT)
        f_star_text.set_color(GREEN)
        self.add(f_star_text)

        self.wait(3)

        # duality gap
        self.play(FadeOut(f_star_text), FadeOut(lambda_text))

        duality_gap_line_start = axes.c2p(0, 2)
        duality_gap_line_end = axes.c2p(0, 2.5)
        duality_gap_line = Line(start=duality_gap_line_start, end=duality_gap_line_end, color=BLUE)
        duality_gap_line.set_stroke(width=10)
        self.add(duality_gap_line)
        self.wait()

        duality_gap_text = Tex("gap = \mathcal{L}(x, \lambda^*) - f(x^*)")
        duality_gap_text.next_to(duality_gap_line, direction=LEFT)
        duality_gap_text.set_color(BLUE)
        self.add(duality_gap_text)
        self.wait(3)
