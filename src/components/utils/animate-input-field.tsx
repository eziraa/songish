import styled from "styled-components";
import Modal from "../sections/modal/modal";

export const InputField = styled.div`
  height: 4rem;
  width: 100%;
  position: relative;
  input {
    padding-left: 0.8rem;
    width: 100%;
    height: 100%;
    font-size: 1.7rem;
    border: none;
    border-bottom: 0.1rem solid #05c4a4da;
    outline: none;
    background-color: white;
  }
  input:invalid ~ label,
  input:valid ~ label {
    transform: translateY(-20px);
    font-size: 1rem;
    color: #05c4a4da;
  }
  input:placeholder-shown ~ label {
    transform: translateY(0);
    font-size: 1.6rem;
  }
  input:focus ~ label {
    transform: translateY(-20px);
    font-size: 1rem;
    color: #05c4a4da;
  }

  label {
    position: absolute;
    bottom: 1rem;
    left: 0;
    color: #05c4a4da;
    pointer-events: none;
    font-family: "Roboto";
    font-size: 1.6rem;
    transition: all 0.5s;
    outline: none;
    padding-left: 0.8rem;
  }
  input[type="file"],
  input[type="date"] {
    color: #05c4a4da;
  }

  input[type="file"] ~ label {
    transform: translateY(-30px);
  }
  input[type="date"] ~ label {
    transform: translateY(-25px);
  }
`;

const InputConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  background-color: white;
  height: 20rem;
  padding: 3rem;
  border: 2px solid red;
`;

export const MyComponent = () => (
  <Modal>
    <InputConatiner>
      <InputField>
        <input type="text" required />
        <label>Username</label>
      </InputField>
    </InputConatiner>
  </Modal>
);
