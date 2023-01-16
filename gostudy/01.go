package main

import "fmt"

//first
func main1() {
	var a float32
	a = 1111.2
	b := "aaaaaa"
	fmt.Println(b)
	fmt.Println(a)
	fmt.Println("Hello " +
		"world")
	fmt.Printf("%T\n", a)
	//change
	//c := 30
	//d := 40
	//e := c
	c, d, e := 10, 20, 30
	d, e, c = 10, 20, 30
	av := true
	pa := 'a'
	fmt.Printf("%T\n", av)
	fmt.Printf("%T\n", pa)
	fmt.Println(c, d, e)
}
