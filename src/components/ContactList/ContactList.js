import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { toInt } from "../../components/GlobalFunctions";

const ContactList = props => {
	let contacts;
	if (props.groupList) {
		contacts = props.contacts.map((contact, index) => (
			<Link to="/private-chat" key={parseInt(contact.RECEIVERPEOPLERSN)}>
				<Contact
					name={contact.FULLNAME}
					avatar={contact.PROFILEPICTURE}
					lastMessage={contact.LASTMESSAGE}
					time={contact.LASTMESSAGETIME}
					lastUser={contact.LASTUSER}
					userType={contact.MESSAGECATEGORY}
					messageCode={contact.MESSAGECODE}
				/>
			</Link>
		));
	} else {
		contacts = props.contacts.map((contact, index) => (
			<Link
				to="/private-chat"
				key={parseInt(contact.RECEIVERPEOPLERSN) + "-" + index}>
				<Contact
					name={contact.FULLNAME}
					avatar={contact.PROFILEPICTURE}
					lastMessage={contact.LASTMESSAGE}
					time={contact.LASTMESSAGETIME}
					lastUser={contact.LASTUSER}
				/>
			</Link>
		));
	}
	return (
		<div className={styles.ContactList} key={props.key}>
			{props.createBtn ? <button>{props.createBtn}</button> : null}
			{contacts}
		</div>
	);
};

export default ContactList;
