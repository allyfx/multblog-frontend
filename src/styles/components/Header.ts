import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 76px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const HeaderContent = styled.div`
  width: 1120px;
  background-color: #FF8A34;
  border-radius: 0px 0px 200px 200px;
  padding-left: 55px;
  padding-right: 115px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
  & > div {
    display: flex;
    align-items: center;
    label {
      font-size: 18px;
      color: #FFFFFF;
    }
    span {
      font-size: 18px;
      color: #FFFFFF;
      cursor: pointer;
      transition: color 0.2s;
      &:hover {
        color: #E5E5E5;
      }
    }
    .separator {
      width: 2px;
      height: 55px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      margin: 0 20px;
    }
    button.login_button {
      border: none;
      width: 121px;
      height: 45px;
      background: #E96E13;
      border-radius: 20px;
      color: #FFFFFF;
      margin-right: 20px;
      transition: background 0.2s;
      &:hover {
        background: #FF974A;
      }
    }
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #E96E13;
  margin-left: 16px;
  margin-top: 5px;
`;
