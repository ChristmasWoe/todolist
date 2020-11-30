package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func main() {
	mux := httprouter.New()
	mux.POST("/todos/create/", createTodo)
	http.ListenAndServe(":8080", mux)
}

func createTodo(w http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	// Name , Color , Priority , Description , DueDate ,
}
