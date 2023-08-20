import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./petinfo.css";

function PetInfo() {
  const [userlist, setUserList] = useState([]);
  const [user, setUser] = useState({
    customer: "",
    petName: "",
    email: "",
  });

  const { customer, petName, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3004/posts", user);
    loadUser();
	setUser({
		customer:'',
		petName:'',
		email:''
	})
  };
  const loadUser = async () => {
	const res = await axios.get(`http://localhost:3004/posts`);
	setUserList(res.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Header />
      	<div className="petInfoWrap">
			<section className="secLeft">
				<div className="form-table">
					<h3 className="secTitle">Add Pet</h3>
					<form onSubmit={(e) => onSubmit(e)}>
						<div className="formCardWrap">
							<div className="formInfo">
								<label htmlFor="petName">PetName:</label>
								<input
								type="text"
								id="petName"
								name="petName"
								onChange={(e) => onInputChange(e)}
								value={petName}
								/>
							</div>
							<div className="formInfo">
								<label htmlFor="customer">Customer Name:</label>
								<input
								type="text"
								id="customer"
								name="customer"
								onChange={(e) => onInputChange(e)}
								value={customer}
								/>
							</div>
							<div className="formInfo">
								<label htmlFor="email">Email:</label>
								<input
								type="text"
								id="email"
								name="email"
								onChange={(e) => onInputChange(e)}
								value={email}
								/>
							</div>
							<input className="submitBtn" type="submit" value="Submit" />
						</div>	
					</form>
				</div>
			</section>
			<section className="secRight">
				<div className="tableTitle">
					<h3 className="secTitle">Customer List</h3>
				</div>
				<div className="tableWrap"> 
					<table className="tableWrap">
						<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>PetName</th>
							<th>Email</th>
						</tr>
						</thead>
						<tbody>
						{userlist &&
							userlist.map((item, index) => (
							<tr>
								<th scope="row">{index + 1}</th>
								<td>{item.customer}</td>
								<td>{item.petName}</td>
								<td>{item.email}</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>	
			</section>
     	 </div>
    </>
  );
}

export default PetInfo;
