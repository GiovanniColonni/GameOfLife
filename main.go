package main

import (
	"fmt"
	"math/rand"
	"time"
)

const n = 150
const m = 60

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

func main() {
	// create matrix
	matrix := generateRandomMatrix()
	// Clear the screen
	fmt.Print(`
   _____       _      _  __      
  / ____|     | |    (_)/ _|     
 | |  __  ___ | |     _| |_ ___  
 | | |_ |/ _ \| |    | |  _/ _ \ 
 | |__| | (_) | |____| | ||  __/ 
  \_____|\___/|______|_|_| \___| 
                                 
                                 
	`)

	// Pause for a few seconds
	time.Sleep(1 * time.Second)

	// Clear the screen again
	printMatrix(matrix)
	// Pause for a few seconds
	time.Sleep(1 * time.Second)
}
