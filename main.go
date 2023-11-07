package main

import (
	"fmt"
	"math/rand"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const n = 20
const m = 20

var steps int = 0

func generateRandomMatrix() [][]int {
	matrix := make([][]int, n)
	for i := range matrix {
		matrix[i] = make([]int, m)
		for j := range matrix[i] {
			matrix[i][j] = rand.Intn(2)
		}
	}

	return matrix
}

func printMatrix(matrix [][]int) {
	// clear screen
	fmt.Print("\033[H\033[2J")
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 1 {
				fmt.Print("■")
			} else {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}

func getNumNeigh(matrix [][]int, x int, y int) int {

	var n int = 0

	var sx int = x - 1
	var ex int = x + 1

	var sy int = y - 1
	var ey int = y + 1

	if x == 0 {
		sx = 0
	}
	if x == n {
		ex = n
	}

	if y == 0 {
		sy = 0
	}
	if y == n {
		ey = m
	}

	for i := sx; i < ex; i++ {
		for j := sy; j < ey; i++ {
			if matrix[i][j] == 1 {
				n++
			}
		}
	}
	return n
}

func stepGame(matrix [][]int) [][]int {
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			n := getNumNeigh(matrix, i, j)

			if matrix[i][j] == 0 {
				if n > 3 {
					matrix[i][j] = 1
				}
			} else {
				if n < 2 || n > 3 {
					matrix[i][j] = 0
				}
			}
		}
	}
	return matrix
}

func main() {
	// TODO;
	// Next steps:
	// 1. metterlo in loop
	// 2. runnare algoritmo
	// 3. programmare signal per dire bye bye

	// Dopo i next step:
	// Utilizzare i colori per catturare dei pattern
	// create matrix
	matrix := generateRandomMatrix()
	// Clear the screen
	fmt.Print("\033[H\033[2J")
	fmt.Print(`
   _____       _      _  __      
  / ____|     | |    (_)/ _|     
 | |  __  ___ | |     _| |_ ___  
 | | |_ |/ _ \| |    | |  _/ _ \ 
 | |__| | (_) | |____| | ||  __/ 
  \_____|\___/|______|_|_| \___| 
                                 
                                 
	`)
	time.Sleep(3 * time.Second)
	fmt.Print("\033[H\033[2J")

	interruptChannel := make(chan os.Signal, 1)
	signal.Notify(interruptChannel, os.Interrupt, syscall.SIGINT)

	exitChannel := make(chan bool)
	// Handle the Ctrl+C signal
	go func() {
		<-interruptChannel
		fmt.Print("\033[H\033[2J")
		fmt.Print(`
		____   __ __    ___      __ 
		|    \ |  |  |  /  _]    |  |
		|  o  )|  |  | /  [_     |  |
		|     ||  ~  ||    _]    |__|
		|  O  ||___, ||   [_      __ 
		|     ||     ||     |    |  |
		|_____||____/ |_____|    |__|                        
	`)
		exitChannel <- true
	}()

	for {
		select {
		case <-exitChannel:
			// TODO:  Some game statistics here?
			println("Number of steps of the execution: ", steps)
			return
		default:
			printMatrix(matrix)
			matrix = stepGame(matrix)
			steps++
			time.Sleep(1 * time.Second)
		}
	}

}
