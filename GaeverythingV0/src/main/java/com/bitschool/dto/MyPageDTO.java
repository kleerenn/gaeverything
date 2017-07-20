package com.bitschool.dto;

public class MyPageDTO {
	
	private String email;
	private String photo;
	private String name;
	private String phone;
	private String notes;
	

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	@Override
	public String toString() {
		return "MyPageDTO [email=" + email  + ", photo = "+photo+ ", name=" + name + ", phone=" + phone + ", notes="
				+ notes + "]";
	}
	
	
	
}
