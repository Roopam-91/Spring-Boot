package com.example.springmvc.model;

public class Survey {
public int surveyId;
public String id;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public int getSurveyId() {
	return surveyId;
}
public void setSurveyId(int surveyId) {
	this.surveyId = surveyId;
}
public String status;
private String complement;
public String getComplement() {
	return complement;
}
public void setComplement(String complement) {
	this.complement = complement;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
}
