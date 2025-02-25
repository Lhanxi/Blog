package models

type Post struct {
    ID          int    `json:"id"`
    Title       string `json:"title"`
    Lecturer    string `json:"lecturer"`
    Overview    string `json:"overview"`
    Topics      string `json:"topics"`
    Assessments string `json:"assessments"`
    Remarks     string `json:"remarks"`
    SemesterId  int    `json:"semester_id"` 
}

