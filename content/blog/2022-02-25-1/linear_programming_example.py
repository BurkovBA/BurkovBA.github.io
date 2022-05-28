from manimlib import *
import numpy as np


class Plane(Surface):
    CONFIG = {
        "shift": 0,
        "x_coef": 0,
        "y_coef": 0,
        "z_coef": 0,
    }

    def uv_func(self, u, v):
        x_normed = self.x_coef / self.z_coef
        y_normed = self.y_coef / self.z_coef
        shift_normed = self.shift / self.z_coef

        points = [u, v, u * x_normed + v * y_normed + shift_normed]

        return points


class LinearProgrammingScene(Scene):
    def construct(self):
        # set camera frame
        frame = self.camera.frame
        frame.set_euler_angles(
            theta=-150 * DEGREES,
            phi=70 * DEGREES
        )

        # draw axes
        axes = ThreeDAxes((-10, 10), (-10, 10), (0, 10))
        axes.add_coordinate_labels(
            font_size=20,
            num_decimal_places=1,
        )
        self.add(axes)
        labels = axes.get_axis_labels(x_label_tex='x', y_label_tex='y').set_color(GREY)
        self.add(labels)

        constraint_1_text = TexText(
            """Draw the plane that delimits\n
            half-space of constraint 1:\n
            $2x + 3y + z \le 5$.
            """,
            color=BLACK
        )
        constraint_1_text.fix_in_frame()
        constraint_1_text.to_edge(UP)
        self.play(Write(constraint_1_text))
        self.wait(3)
        self.play(FadeOut(constraint_1_text))

        first_constraint_plane = Plane(
            u_range=(-3, 3), v_range=(-3, 3),
            x_coef=2, y_coef=3, z_coef=1, shift=5,
            color=GREEN, opacity=0.5
        )
        self.play(ShowCreation(first_constraint_plane))
        self.wait()

        constraint_2_text = TexText(
            """Draw the plane that delimits\n
            half-space of constraint 2:\n
            $3x + 4y + 2z \le 6$.
            """,
            color=BLACK
        )
        constraint_2_text.fix_in_frame()
        constraint_2_text.to_edge(UP)
        self.play(Write(constraint_2_text))
        self.wait(3)
        self.play(FadeOut(constraint_2_text))

        second_constraint_plane = Plane(
            u_range=(-3, 3), v_range=(-3, 3),
            x_coef=3, y_coef=4, z_coef=2, shift=6,
            color=BLUE, opacity=0.5
        )
        self.play(ShowCreation(second_constraint_plane))
        self.wait()

        # move camera
        self.play(
            # Move camera frame during the transition
            frame.animate.increment_phi(-60 * DEGREES),
            frame.animate.increment_theta(-180 * DEGREES),
            run_time=5
        )

        intersection_text = TexText(
            """Intersection between the two\n
            planes is a line.
            """,
            color=BLACK
        )
        intersection_text.fix_in_frame()
        intersection_text.to_edge(UP)
        self.play(Write(intersection_text))
        self.wait(3)
        self.play(FadeOut(intersection_text))

        self.play(frame.animate.increment_theta(180 * DEGREES), run_time=3)

        optimized_function_text = TexText(
            """Now draw the series of planes,\n
            corresponding to a line,\n
            we seek to optimize.""",
            color=BLACK
        )
        optimized_function_text.fix_in_frame()
        optimized_function_text.to_edge(UP)
        self.play(Write(optimized_function_text))
        self.wait(3)
        self.play(FadeOut(optimized_function_text))

        # generate a sequence of planes that we are going to optimize
        optimized_function_plane_1 = Plane(
            u_range=(-3, 3), v_range=(-3, 3),
            x_coef=1, y_coef=5, z_coef=3, shift=0,
            color=RED, opacity=0.5
        )
        self.play(ShowCreation(optimized_function_plane_1))
        self.wait()

        optimized_function_plane_2 = Plane(
            u_range=(-3, 3), v_range=(-3, 3),
            x_coef=1, y_coef=5, z_coef=3, shift=4,
            color=RED, opacity=0.5
        )
        self.play(ShowCreation(optimized_function_plane_2))
        self.wait()

        optimized_function_plane_3 = Plane(
            u_range=(-3, 3), v_range=(-3, 3),
            x_coef=1, y_coef=5, z_coef=3, shift=8,
            color=RED, opacity=0.5
        )
        self.play(ShowCreation(optimized_function_plane_3))
        self.wait()

        no_optimum_text = TexText(
            """The intersection of constraints\n
            is an infinite line,\n
            thus no single point of maximum exists in this case.""",
            color=BLACK
        )
        no_optimum_text.fix_in_frame()
        no_optimum_text.to_edge(UP)
        self.play(Write(no_optimum_text))
        self.wait(3)
        self.play(FadeOut(no_optimum_text))
