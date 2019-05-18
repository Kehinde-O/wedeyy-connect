import React from "react";
import styles from "./Contact.module.css";
import user from "../../../images/user.svg";
import users from "../../../images/users.svg";
import envelope from "../../../images/envelope.svg";
import { timeSince } from "../../../components/GlobalFunctions";

const Contact = props => {
	console.log("Contacts", props);
	let noImage = false;
	let imageFile = props.avatar;
	if (props.avatar === null) {
		noImage = true;
		if (props.userType === "private") {
			imageFile = user;
		} else {
			imageFile = users;
		}
	}
	return (
		<div className={styles.Contact}>
			<img
				src={imageFile}
				alt="avatar"
				className={noImage ? styles.noImage : ""}
			/>
			<div>
				<h4>{props.name}</h4>
				<p>
					<span
						style={
							props.lastMessage === "Missed Video Call"
								? { color: "#E74D3D" }
								: null
						}>
						{" "}
						<img src={envelope} alt="" />
						{props.lastUser ? (
							<span style={{ fontFamily: "heebomedium" }}>
								{props.lastUser}:{" "}
							</span>
						) : null}
						{props.lastMessage}
					</span>
					<span>{timeSince(props.time)}</span>
				</p>
			</div>
		</div>
	);
};

export default Contact;
