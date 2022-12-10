import turtle

turtle.title("FOR YOU KARMILA SRI WULAN")
turtle.setup(1.0, 1.0)

t = turtle.Turtle()

t.speed(0)

turtle.Screen().bgcolor("#282D48")

t.up()
t.setpos(0, 100)
t.down()

for i in range(215):
	if i % 2 == 0:
		t.color('#B86B77')
	else:
		t.color('#F6CFCA')

	t.circle(180-i/2, 90)
	t.left(90)

	if i % 2 == 0:
		t.color('#F6CFCA')
	else:
		t.color('#B86B77')

	t.circle(180-i/2, 90)
	t.left(10)

t.up()
t.setpos(0, -200-10)
t.down()

t.write("HAI KARMILA", align="center", font=("Verdana", 35, "bold"))

t.up()
t.setpos(0, -245-10)
t.down()

t.write("SEINDAH INDAHNYA BUNGA DAN WANITA YANG ADA DI DUNIA", align="center", font=("Verdana", 28, "bold"))

t.up()
t.setpos(0, -295-10)
t.down()

t.write("TETAPLAH ENGKAU YANG KU SUKA DAN KU CINTA", align="center", font=("Verdana", 35, "bold"))

t.hideturtle()

turtle.exitonclick()