package main

import (
	"backend/database"
	"backend/handlers"
	"backend/middleware"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

func main() {
	database.InitDB()

	r := mux.NewRouter()

	r.HandleFunc("/login", handlers.LoginHandler).Methods("POST")
	r.HandleFunc("/register", handlers.RegisterHandler).Methods("POST")

	adminRoute := r.PathPrefix("/admin").Subrouter()
	adminRoute.Use(middleware.AuthMiddleware, middleware.AdminMiddleware)
	adminRoute.HandleFunc("", handlers.AdminDashboard).Methods("GET")

	fmt.Println("Go server running on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
