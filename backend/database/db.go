package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	DB_USER     = "postgres"
	DB_PASSWORD = "password"
	DB_NAME     = "postgres"
	DB_HOST     = "localhost"
	DB_PORT     = 5433
)

var DB *sql.DB

func InitDB() {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME)

	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Failed to open database:", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Database connection error:", err)
	}

	fmt.Println("Connected to PostgreSQL")
}
