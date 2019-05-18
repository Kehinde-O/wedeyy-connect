import React, { Component } from "react";
export default class API extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	async makeApiCall(options) {
		let host = "http://" + window.location.hostname;
		let url = host + "/api/";
		let header = new Headers({
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "multipart/form-data"
		});
		const responseData = await fetch(url, {
			header: header,
			method: "POST",
			body: options
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				return data;
			})
			.catch(error => {
				console.error("Error while fetching data: ", error);
			});
		return responseData;
	}

	getUserRsn(newRsn) {
		let rsn;
		if (newRsn === true) {
			rsn = prompt("Enter a user rsn to login in range 1-4", "1");
			sessionStorage.setItem("peoplersn", rsn);
		} else {
			if (sessionStorage.getItem("peoplersn").length < 1) {
				rsn = prompt("Enter a user rsn to login in range 1-4", "1");
				sessionStorage.setItem("peoplersn", rsn);
			} else {
				rsn = sessionStorage.getItem("peoplersn");
			}
		}
		return rsn;
	}

	async getRecentChats(peopleRsn) {
		let formData = new FormData();
		formData.append("code", "7317257850");
		formData.append("dataPeopleRsn", peopleRsn);
		const result = await this.makeApiCall(formData);
		return result;
	}

	async getConnectContact(peopleRsn) {
		let formData = new FormData();
		formData.append("code", "7317235969");
		formData.append("dataPeopleRsn", peopleRsn);
		const result = await this.makeApiCall(formData);
		return result;
	}

	async getConnectGroup(peopleRsn) {
		let formData = new FormData();
		formData.append("code", "7317249800");
		formData.append("dataPeopleRsn", peopleRsn);
		const result = await this.makeApiCall(formData);
		return result;
	}
}
