import { useState } from "react";
import "../App.css";
import Form from "../components/Form";
import ItemList from "../components/ItemList";
import axios from "axios";

function Home() {
  const obj = {
    name: "",
    attributes: {
      intelligence: 0,
      strength: 0,
      endurance: 0,
      spicyFoodTolerance: 0,
    },
  };

  const [teamObj, setTeamObj] = useState(obj);
  const [applicantObj, setApplicantObj] = useState(obj);

  const [team, setTeam] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [scoredApplicants, setScoredApplicants] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      team.length <= 1 ||
      applicants.length <= 1 ||
      team.length !== applicants.length
    ) {
      alert(
        " Team and Applicant List should be greater then 2 and should be equal "
      );
    } else {
      axios
        .post("http://localhost:5000/api/compatibility", {
          team: team,
          applicants: applicants,
        })
        .then((response) => {
          setScoredApplicants(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleTeamChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setTeamObj((prevPerson) => ({
        ...prevPerson,
        name: value,
      }));
    } else {
      setTeamObj((prevPerson) => ({
        ...prevPerson,
        attributes: {
          ...prevPerson.attributes,
          [name]: value,
        },
      }));
    }
  };

  const handleApplicantChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setApplicantObj((prevPerson) => ({
        ...prevPerson,
        name: value,
      }));
    } else {
      setApplicantObj((prevPerson) => ({
        ...prevPerson,
        attributes: {
          ...prevPerson.attributes,
          [name]: value,
        },
      }));
    }
  };

  const handleTeamSave = () => {
    setTeam((prev) => [...prev, teamObj]);
    setTeamObj(obj);
  };

  const handleApplicantSave = () => {
    setApplicants((prev) => [...prev, applicantObj]);
    setApplicantObj(obj);
  };

  const applicantText = "Add To Applicant List";
  const teamText = "Add To Team List";

  return (
    <div className="App">
      <div>
        <h1>Compatibility Predictor</h1>
      </div>
      <Form
        btntext={teamText}
        obj={teamObj}
        handleInput={handleTeamChange}
        handleSave={handleTeamSave}
      />
      {!team.length == 0 ? (
        team.map((item) => <ItemList item={item} />)
      ) : (
        <div style={{ marginBottom: "30px" }}>Team list is empty</div>
      )}
      <Form
        btntext={applicantText}
        handleInput={handleApplicantChange}
        obj={applicantObj}
        handleSave={handleApplicantSave}
      />
      {!applicants.length == 0 ? (
        applicants.map((item) => <ItemList item={item} />)
      ) : (
        <div>Applicant list is empty</div>
      )}

      <div style={{ marginTop: "100px" }}>
        <button
          style={{ width: "150px", backgroundColor: "blue" }}
          className="btnstyle"
          onClick={handleSubmit}
        >
          Check Compatibility
        </button>
        {!scoredApplicants.length == 0 ? (
          <div style={{ marginTop: "10px" }}>
            <table>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
              {scoredApplicants.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.score}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
