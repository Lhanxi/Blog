package handlers

import (
	"encoding/json"
	"net/http"
	"backend/models"
	"backend/database"
	"github.com/gorilla/mux"
)

func GetPost(w http.ResponseWriter, r *http.Request) {
	semesterId := mux.Vars(r)["semesterId"]

	if semesterId == "" {
		http.Error(w, "Missing semesterId", http.StatusBadRequest)
		return
	}

	var posts []models.Post

	rows, err := database.DB.Query("SELECT * FROM module WHERE semester_id = $1", semesterId)
	if err != nil {
		http.Error(w, "Error fetching posts", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var post models.Post
		if err := rows.Scan(&post.ID, &post.Title, &post.Lecturer, &post.Overview, &post.Topics, &post.Assessments, &post.Remarks, &post.SemesterId); err != nil {
			http.Error(w, "Error reading post", http.StatusInternalServerError)
			return
		}
		posts = append(posts, post)
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(posts); err != nil {
		http.Error(w, "Error encoding posts", http.StatusInternalServerError)
	}
}
