import { Container, TextField, Button, Divider } from "@material-ui/core"
import React from "react"
import { useState } from "react"

function Loginpage() {
	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")
	const [emailerror, setemailerror] = useState("")
	const [passworderror, setpassworderror] = useState("")
	const handle = () => {
		//if you filled all the data
		if (email.length > 0 && password.length > 0) {
			alert("Sucessfully Submitted")
		}
		//if you wont given a data
		else if (email.length == "" && password.length == "") {
			alert("Please Fill The Given Field")
			//for Email
		} else if (email == "") {
			setemailerror("Please Enter The Email Address *")
		}
		//for password
		else if (password == "") {
			setpassworderror("Please Enter The Password Section *")
		}
	}
	return (
		<div>
			<div className="icon">
				<div className="icon_class">
					<div className="text">
						<h1>Login</h1>
					</div>
				</div>
				<Container>
					<div className="row">
						<div className="col-6">
							<TextField
								id="outlined-basic"
								label="Enter The Email"
								variant="outlined"
								value={email}
								required
								autoComplete="off"
								onChange={(e) => {
									setemail(e.target.value)
									emailerror("")
								}}
								fullWidth
							/>
							<span className="emailerror">{emailerror}</span>
						</div>
						<br></br>
						<br></br>
						<div className="col-6">
							<TextField
								id="outlined-basic"
								label="Enter The Password"
								variant="outlined"
								value={password}
								onChange={(e) => {
									setpassword(e.target.value)
									passworderror("")
								}}
								required
								fullWidth
							/>
							<span className="passworderror">{passworderror}</span>
						</div>
						<br></br>
						<br></br>
						<center>
							<Button variant="contained" color="primary" onClick={() => handle()}>
								Login
							</Button>
						</center>
						<br></br>
						<Divider></Divider>
						<br></br>
						<center>
							<p className="text-add">Create An Account ?</p>
						</center>
					</div>
				</Container>
			</div>
		</div>
	)
}
export default Loginpage
