from manimlib import *
import numpy as np


class Paraboloid(Surface):
    def uv_func(self, u, v):
        points = [u, v, u**2 + v**2]
        return points


class CustomVector(Arrow):
    CONFIG = {
        "buff": 0,
    }

    def __init__(self, origin=ORIGIN, direction=RIGHT, **kwargs):
        if len(direction) == 2:
            direction = np.hstack([direction, 0])
        super().__init__(origin, direction, **kwargs)


class SphereTangentPlane(Surface):
    CONFIG = {
        "x_shift": 0,
        "y_shift": 0,
        "z_shift": 0,
        "normal_u": 0,
        "normal_v": 0
    }

    def uv_func(self, u, v):
        points = [self.x_shift + u, self.y_shift + v, u * self.normal_u + v * self.normal_v + self.z_shift]
        return points


class CylinderTangentPlane(Surface):
    CONFIG = {
        # coordinates of origin of the plain in axes coordinates
        "x_shift": 0,
        "y_shift": 0,
        "z_shift": 0,

        # projections of u onto axes
        "proj_u_x": 0,
        "proj_u_y": 0,
        "proj_u_z": 0,

        # projections of v onto axes
        "proj_v_x": 0,
        "proj_v_y": 0,
        "proj_v_z": 0,
    }

    def uv_func(self, u, v):
        points = [
            self.x_shift + u * self.proj_u_x + v * self.proj_v_x,
            self.y_shift + u * self.proj_u_y + v * self.proj_v_y,
            self.z_shift + u * self.proj_u_z + v * self.proj_v_z
        ]
        return points


class CustomCylinder(Surface):
    CONFIG = {
        "height": 5,
        "radius": 4,
        "axis": OUT,
        "u_range": (0, TAU),
        "v_range": (-1, 1),
        "resolution": (101, 11),
    }

    def init_points(self):
        super().init_points()
        self.scale(self.radius)
        self.set_depth(self.height, stretch=True)
        self.apply_matrix(z_to_vector(self.axis))
        return self

    def uv_func(self, u, v):
        return [np.cos(u), np.sin(u), v]


class LagrangeMultipliers3DScene(ThreeDScene):
    def paraboloid_section(self, frame):
        # Create text about paraboloid
        paraboloid_text = TexText("Consider a paraboloid $f(x, y, z) = x^2 + y^2 - z = c$", color=BLACK)
        paraboloid_text.fix_in_frame()
        paraboloid_text.to_edge(UP)
        self.add(paraboloid_text)
        self.play(Write(paraboloid_text))
        self.wait(2)
        self.play(FadeOut(paraboloid_text))

        # draw a paraboloid
        paraboloid = Paraboloid(u_range=(-1, 1), v_range=(-1, 1))
        paraboloid.mesh = SurfaceMesh(paraboloid)
        self.play(
            ShowCreation(paraboloid, lag_ratio=0.01, run_time=3),
            ShowCreation(paraboloid.mesh, lag_ratio=0.01, run_time=3),
        )

        # move camera
        self.play(
            # Move camera frame during the transition
            frame.animate.increment_theta(-360 * DEGREES),
            run_time=5
        )

        # Change text to problem statement
        problem_statement_text = TexText(
            """We are interested in finding minimum of this paraboloid function,\n
            conditioned on 2 constraints: sphere and cylinder""",
            color=BLACK
        )
        problem_statement_text.fix_in_frame()
        problem_statement_text.to_edge(UP)
        self.play(Write(problem_statement_text))
        self.wait(2)

        self.play(
            FadeOut(paraboloid.mesh),
            FadeOut(paraboloid)
        )

        self.play(FadeOut(problem_statement_text))

    def sphere_section(self, frame):
        # Create text about sphere
        sphere_text = TexText("Consider first constraint, a sphere $g_1(x, y, z) = x^2 + y^2 + z^2 = R^2$", color=BLACK)
        sphere_text.fix_in_frame()
        sphere_text.to_edge(UP)
        self.add(sphere_text)
        self.play(Write(sphere_text))
        self.wait(1)
        self.play(FadeOut(sphere_text))

        # draw a sphere
        sphere = Sphere(radius=self.SPHERE_RADIUS, opacity=1, color=GREEN, u_range=(-np.pi, np.pi), v_range=(-np.pi, np.pi))
        sphere.mesh = SurfaceMesh(sphere)

        self.play(
            FadeIn(sphere),
            ShowCreation(sphere.mesh, lag_ratio=0.01, run_time=3),
        )

        # move camera
        self.play(
            # Move camera frame during the transition
            frame.animate.increment_phi(-10 * DEGREES),
            frame.animate.increment_theta(-120 * DEGREES),
            run_time=5
        )

        # change text to tangent plane description
        tangent_plane_text = TexText("Consider a tangent plane to this sphere at some point $"
                                     "(\\frac{1}{\sqrt 3}, \\frac{1}{\sqrt 3}, \\frac{1}{\sqrt 3})$", color=BLACK)
        tangent_plane_text.fix_in_frame()
        tangent_plane_text.to_edge(UP)
        self.play(Write(tangent_plane_text))
        self.wait(1)
        self.play(FadeOut(tangent_plane_text))

        # draw a tangent plane
        tangent_plane = SphereTangentPlane(
            u_range=(-0.5, 0.5), v_range=(-0.5, 0.5),
            normal_u=-self.SPHERE_NORMAL_X / self.SPHERE_NORMAL_Z, normal_v=-self.SPHERE_NORMAL_Y / self.SPHERE_NORMAL_Z,
            x_shift=self.SPHERE_X, y_shift=self.SPHERE_Y, z_shift=self.SPHERE_Z,
            color=GREEN
        )
        tangent_plane.mesh = SurfaceMesh(tangent_plane)
        self.play(
            FadeIn(tangent_plane),
            ShowCreation(tangent_plane.mesh, lag_ratio=0.01, run_time=3)
        )

        # move camera
        self.play(frame.animate.increment_theta(60 * DEGREES), run_time=3)

        # change text to normal to tangent plane
        normal_to_tangent_plane_text = TexText(
        """
        Consider the gradient vector (it is normal to the tangent plane):\n
        $(\\frac{\partial g_1}{\partial x}, \\frac{\partial g_1}{\partial y}, \\frac{\partial g_1}{\partial z}) = (2x, 2y, 2z) = (\\frac{2}{\\sqrt3}, \\frac{2}{\\sqrt3}, \\frac{2}{\\sqrt3})$\n
        """, color=BLACK)
        normal_to_tangent_plane_text.fix_in_frame()
        normal_to_tangent_plane_text.to_edge(UP)
        self.play(Write(normal_to_tangent_plane_text))
        self.wait(1)

        # draw a normal vector to the tangent plane
        origin = np.array((self.SPHERE_X, self.SPHERE_Y, self.SPHERE_Z))  # + np.array((0.5, 0.5, 0.5 * NORMAL_U + 0.5 * NORMAL_V))
        direction = np.array((self.SPHERE_NORMAL_X, self.SPHERE_NORMAL_Y, self.SPHERE_NORMAL_Z))
        normal_vector = CustomVector(origin=origin, direction=origin-direction, stroke_color=GREEN)
        # self.add(normal_vector)
        self.play(FadeIn(normal_vector))
        self.wait(3)

        self.play(
            FadeOut(normal_to_tangent_plane_text),
            FadeOut(normal_vector),
            FadeOut(tangent_plane.mesh),
            FadeOut(tangent_plane),
            FadeOut(sphere.mesh),
            FadeOut(sphere)
        )

    def cylinder_section(self):
        # change text to cylinder label
        cylinder_text = TexText("Consider a second constraint: cylinder $g_2(x, y, z) = x^2 + y^2 = R^2$", color=BLACK)
        cylinder_text.fix_in_frame()
        cylinder_text.to_edge(UP)
        self.play(Write(cylinder_text))
        self.wait(1)

        # draw a cylinder
        cylinder = CustomCylinder(color=BLUE, u_range=(-np.pi, np.pi), v_range=(-np.pi, np.pi), radius=self.CYLINDER_RADIUS, height=4)
        cylinder.mesh = SurfaceMesh(cylinder)

        self.play(
            FadeIn(cylinder),
            ShowCreation(cylinder.mesh, lag_ratio=0.01, run_time=3),
        )

        # change text to normal to tangent plane
        normal_to_tangent_plane_text = TexText(
        """
        Consider the gradient vector (again, normal to the tangent plane):\n
        $(\\frac{\partial g_2}{\partial x}, \\frac{\partial g_2}{\partial y}, \\frac{\partial g_2}{\partial z}) = (2x, 2y, 0) = (\\frac{2}{\\sqrt3}, \\frac{2}{\\sqrt3}, 0)$\n
        """, color=BLACK)
        self.play(FadeOut(cylinder_text))
        normal_to_tangent_plane_text.fix_in_frame()
        normal_to_tangent_plane_text.to_edge(UP)
        self.play(Write(normal_to_tangent_plane_text))
        self.wait(3)
        self.play(FadeOut(normal_to_tangent_plane_text))

        # cylinder_label = axes.get_graph_label(cylinder_graph, Text("Cylinder constraint"))

#        points = [self.x_shift + u, self.y_shift + v, u * self.normal_u + v * self.normal_v + self.z_shift]

        # draw a tangent plane
        tangent_plane = CylinderTangentPlane(
            u_range=(-0.5, 0.5), v_range=(-0.5, 0.5),
            proj_u_x=-math.sqrt(2)/2, proj_u_y=math.sqrt(2)/2, proj_u_z=0,
            proj_v_x=0, proj_v_y=0, proj_v_z=1,
            x_shift=self.CYLINDER_X, y_shift=self.CYLINDER_Y, z_shift=self.CYLINDER_Z,
            color=BLUE
        )
        tangent_plane.mesh = SurfaceMesh(tangent_plane)
        self.play(
            FadeIn(tangent_plane),
            ShowCreation(tangent_plane.mesh, lag_ratio=0.01, run_time=3)
        )

        # draw a normal vector to the tangent plane
        origin = np.array((self.CYLINDER_X, self.CYLINDER_Y, self.CYLINDER_Z))
        direction = np.array((-2/math.sqrt(3), -2/math.sqrt(3), 0))
        normal_vector = CustomVector(origin=origin, direction=origin-direction, stroke_color=BLUE)
        self.play(FadeIn(normal_vector))
        self.wait(3)

        self.play(
            FadeOut(normal_vector),
            FadeOut(tangent_plane.mesh),
            FadeOut(tangent_plane),
            FadeOut(cylinder.mesh),
            FadeOut(cylinder)
        )

    def two_constraits_section(self):
        # change text to normal to tangent plane
        two_constraints_text = TexText(
        """
        Now we consider intersection of the two constraints,\n
        $g_1(x, y, z) = c_1$ and $g_2(x, y, z) = c_2$.\n
        Intersection of their tangent planes is a line.
        """, color=BLACK)
        two_constraints_text.fix_in_frame()
        two_constraints_text.to_edge(UP)
        self.play(Write(two_constraints_text))
        self.wait(3)
        self.play(FadeOut(two_constraints_text))

        # draw a sphere tangent plane
        sphere_tangent_plane = SphereTangentPlane(
            u_range=(-0.5, 0.5), v_range=(-0.5, 0.5),
            normal_u=-self.SPHERE_NORMAL_X / self.SPHERE_NORMAL_Z, normal_v=-self.SPHERE_NORMAL_Y / self.SPHERE_NORMAL_Z,
            x_shift=self.SPHERE_X, y_shift=self.SPHERE_Y, z_shift=self.SPHERE_Z,
            color=GREEN
        )
        sphere_tangent_plane.mesh = SurfaceMesh(sphere_tangent_plane)
        self.play(
            FadeIn(sphere_tangent_plane),
            ShowCreation(sphere_tangent_plane.mesh, lag_ratio=0.01, run_time=3)
        )

        # draw a cylinder tangent plane
        cylinder_tangent_plane = CylinderTangentPlane(
            u_range=(-0.5, 0.5), v_range=(-0.5, 0.5),
            proj_u_x=-math.sqrt(2)/2, proj_u_y=math.sqrt(2)/2, proj_u_z=0,
            proj_v_x=0, proj_v_y=0, proj_v_z=1,
            x_shift=self.CYLINDER_X, y_shift=self.CYLINDER_Y, z_shift=self.CYLINDER_Z,
            color=BLUE
        )
        cylinder_tangent_plane.mesh = SurfaceMesh(cylinder_tangent_plane)
        self.play(
            FadeIn(cylinder_tangent_plane),
            ShowCreation(cylinder_tangent_plane.mesh, lag_ratio=0.01, run_time=3)
        )

        intersection_line_center = (1/math.sqrt(3) * self.SPHERE_RADIUS, 1/math.sqrt(3) * self.SPHERE_RADIUS, 1/math.sqrt(3) * self.SPHERE_RADIUS)
        intersection_line_start = (intersection_line_center[0] - 1, intersection_line_center[1] + 1, intersection_line_center[2])
        intersection_line_end = (intersection_line_center[0] + 1, intersection_line_center[1] - 1, intersection_line_center[2])
        intersection_line = DashedLine(start=intersection_line_start, end=intersection_line_end, color=RED)
        self.play(ShowCreation(intersection_line))

        two_constraints_text_2 = TexText(
        """
        Both gradients $\\nabla g_1(x, y, z)$ and $\\nabla g_2(x, y, z)$\n
        are orthogonal to this line.
        """, color=BLACK)
        two_constraints_text_2.fix_in_frame()
        two_constraints_text_2.to_edge(UP)
        self.play(Write(two_constraints_text_2))
        self.wait(3)
        self.play(FadeOut(two_constraints_text_2))

        # draw a normal vector to the tangent plane
        sphere_normal_origin = np.array((self.SPHERE_X, self.SPHERE_Y, self.SPHERE_Z))
        sphere_normal_direction = np.array((self.SPHERE_NORMAL_X, self.SPHERE_NORMAL_Y, self.SPHERE_NORMAL_Z))
        sphere_normal_vector = CustomVector(origin=sphere_normal_origin, direction=sphere_normal_origin-sphere_normal_direction, stroke_color=GREEN)
        self.play(FadeIn(sphere_normal_vector))

        cylinder_normal_origin = np.array((self.CYLINDER_X, self.CYLINDER_Y, self.CYLINDER_Z))
        cylinder_normal_direction = np.array((-2/math.sqrt(3), -2/math.sqrt(3), 0))
        cylinder_normal_vector = CustomVector(origin=cylinder_normal_origin, direction=cylinder_normal_origin-cylinder_normal_direction, stroke_color=BLUE)
        self.play(FadeIn(cylinder_normal_vector))

        two_constraints_text_3 = TexText(
        """
        Now, gradient $\\nabla f(x, y, z)$ is supposed to be orthogonal\n
        to the intersection line, meaning, it should be in the plane\n
        $\\nabla f(x, y, z) = \\lambda_1 \\nabla g_1(x, y, z) + \\lambda_2 \\nabla g_2(x, y, z)$. 
        """, color=BLACK)
        two_constraints_text_3.fix_in_frame()
        two_constraints_text_3.to_edge(UP)
        self.play(Write(two_constraints_text_3))
        self.wait(3)
        self.play(FadeOut(two_constraints_text_3))

        self.play(
            FadeOut(sphere_tangent_plane.mesh),
            FadeOut(sphere_tangent_plane),
            FadeOut(cylinder_tangent_plane.mesh),
            FadeOut(cylinder_tangent_plane)
        )

        two_constraints_text_4 = TexText(
        """
        Intersection of constraints $g_1(x, y, z)$ and $g_2(x, y, z)$\n
        at the given point locally behaves as intersection of two planes,\n
        which is a line.
        """, color=BLACK)
        two_constraints_text_4.fix_in_frame()
        two_constraints_text_4.to_edge(UP)
        self.play(Write(two_constraints_text_4))
        self.wait(3)
        self.play(FadeOut(two_constraints_text_4))

        two_constraints_text_5 = TexText(
        """
        $\\nabla f(x, y, z)$ at the point of optimum is supposed to be\n
        orthogonal to the constraint line, so that movement along it\n
        would not alter the value of $f(x, y, z)$.
        """, color=BLACK)
        two_constraints_text_5.fix_in_frame()
        two_constraints_text_5.to_edge(UP)
        self.play(Write(two_constraints_text_5))
        self.wait(3)
        self.play(FadeOut(two_constraints_text_5))

        # draw a cylinder tangent plane
        gradient_plane = CylinderTangentPlane(
            u_range=(-0.5, 0.5), v_range=(-0.5, 0.5),
            proj_u_x=-math.sqrt(2)/2, proj_u_y=-math.sqrt(2)/2, proj_u_z=0,
            proj_v_x=0, proj_v_y=0, proj_v_z=1,
            x_shift=self.CYLINDER_X, y_shift=self.CYLINDER_Y, z_shift=self.CYLINDER_Z,
            color=RED, opacity=0.8
        )
        gradient_plane.mesh = SurfaceMesh(gradient_plane)
        self.play(
            FadeIn(gradient_plane),
            ShowCreation(gradient_plane.mesh, lag_ratio=0.01, run_time=3)
        )

        gradient_vector = CustomVector(origin=sphere_normal_origin, direction=sphere_normal_origin-sphere_normal_direction, stroke_color=RED)
        self.play(FadeIn(gradient_vector))
        self.play(Rotating(gradient_vector, axis=(-1, 1, 0), about_point=intersection_line_center))

        two_constraints_text_6 = TexText(
        """
        Which leaves us with\n 
        the multi-dimensional Lagrange multipliers method:
        $\\nabla f(x, y, z) = \\lambda_1 \\nabla g_1(x, y, z) + \\lambda_2 \\nabla g_2(x, y, z)$. 
        """, color=BLACK)
        two_constraints_text_6.fix_in_frame()
        two_constraints_text_6.to_edge(UP)
        self.play(Write(two_constraints_text_6))
        self.wait(3)
        self.play(FadeOut(two_constraints_text_6))

    def construct(self):
        # set perspective
        frame = self.camera.frame
        frame.set_euler_angles(
            theta=-150 * DEGREES,
            phi=70 * DEGREES
        )

        # Add ambient rotation
        # frame.add_updater(lambda m, dt: m.increment_theta(-0.1 * dt))

        # draw axes
        axes = ThreeDAxes((-10, 10), (-10, 10), (0, 10))
        axes.add_coordinate_labels(
            font_size=20,
            num_decimal_places=1,
        )
        self.add(axes)

        # run paraboloid section
        # self.paraboloid_section(frame)

        # set sphere constants
        self.SPHERE_RADIUS = 2

        self.SPHERE_X = 1 / math.sqrt(3) * self.SPHERE_RADIUS
        self.SPHERE_Y = 1 / math.sqrt(3) * self.SPHERE_RADIUS
        self.SPHERE_Z = 1 / math.sqrt(3) * self.SPHERE_RADIUS

        self.SPHERE_NORMAL_X = -2 * self.SPHERE_X / (self.SPHERE_X ** 2 + self.SPHERE_Y ** 2 + self.SPHERE_Z ** 2)
        self.SPHERE_NORMAL_Y = -2 * self.SPHERE_Y / (self.SPHERE_X ** 2 + self.SPHERE_Y ** 2 + self.SPHERE_Z ** 2)
        self.SPHERE_NORMAL_Z = -2 * self.SPHERE_Z / (self.SPHERE_X ** 2 + self.SPHERE_Y ** 2 + self.SPHERE_Z ** 2)

        # run sphere section
        self.sphere_section(frame)

        # set cylinder constants
        self.CYLINDER_RADIUS = self.SPHERE_X * math.sqrt(2)

        # choose the same point as for the sphere
        self.CYLINDER_X = self.SPHERE_X
        self.CYLINDER_Y = self.SPHERE_Y
        self.CYLINDER_Z = self.SPHERE_Z

        self.CYLINDER_NORMAL_X = -2 * self.CYLINDER_X / (self.CYLINDER_X ** 2 + self.CYLINDER_Y ** 2 + self.CYLINDER_Z ** 2)
        self.CYLINDER_NORMAL_Y = -2 * self.CYLINDER_Y / (self.CYLINDER_X ** 2 + self.CYLINDER_Y ** 2 + self.CYLINDER_Z ** 2)
        self.CYLINDER_NORMAL_Z = 0

        # run cylinder section
        self.cylinder_section()

        # run two constraints section
        self.two_constraits_section()
