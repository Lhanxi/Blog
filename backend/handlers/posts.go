package handlers

import (
	"encoding/json"
	"net/http"
	"backend/models"
	"backend/database"
)

func GetPost(w http.ResponseWriter, r *http.Request) {
	var posts []models.Post

	rows, err := database.DB.Query("SELECT id, title, overview FROM module")
	if err != nil {
		http.Error(w, "Error fetching posts", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var post models.Post
		if err := rows.Scan(&post.ID, &post.Title, &post.Overview); err != nil {
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
