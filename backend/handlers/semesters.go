package handlers

import (
	"encoding/json"
	"net/http"
	"backend/models"
	"backend/database"
)

func GetSemesters(w http.ResponseWriter, r *http.Request) {

	var semesters []models.Semester

	rows, err := database.DB.Query("SELECT * FROM semester ORDER BY title ASC")
	if err != nil {
		http.Error(w, "Error fetching posts", http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var semester models.Semester
		if err := rows.Scan(&semester.ID, &semester.Title); err != nil {
			http.Error(w, "Error reading post", http.StatusInternalServerError)
			return
		}
		semesters = append(semesters, semester)
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(semesters); err != nil {
		http.Error(w, "Error encoding posts", http.StatusInternalServerError)
	}
}
