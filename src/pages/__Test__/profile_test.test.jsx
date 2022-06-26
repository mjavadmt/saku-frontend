import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/dom";
import { wait } from "@testing-library/user-event/dist/utils";
import { waitFor } from "@testing-library/dom";
import { Profile } from "pages/profile";
import axios from "axios";
import { get } from "./../../utils/api";

const ProfileTest = () => {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
};
describe("profile page test", () => {
  axios.get.mockResolvedValueOnce({
    data: {
      id: 2,
      person_type: "N",
      name: "علی",
      national_id: "5300052991",
      phone: "09224519088",
      email: "ali.alamdari9088@gmail.com",
      city: "چمران",
      province: "خوزستان",
      address: "",
      profile_image:
        "http://188.121.110.151:8887/media/images/profile_images/FR96L0nsh2.jpg",
      user: 3,
    },
  });
  it("Email must be exist", async () => {
    render(<ProfileTest />);
    const emailInp = screen.getByTestId("emailInp");
    expect(emailInp.value).toBe(undefined);
    await wait(800);
    const resolvedSpan = await waitFor(() => emailInp.value);
    expect(resolvedSpan.value).toHaveTextContent("ali");
  });
  // it("get Api Call", async () => {
  //   axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });
  //   render(<ProfileTest />);
  //   const userNameInput = screen.getByTestId("username");
  //   fireEvent.change(userNameInput, { target: { value: "Ali_Alamdari" } });
  //   expect(userNameInput.value).toBe("Ali_Alamdari");
  // });
  //   it("create account Tag click", async () => {
  //     render(<ProfileTest />);
  //     const divTag = screen.getByTestId("createAccountLink");
  //     fireEvent.click(divTag);
  //     await wait(500);
  //     expect(window.location.pathname).toBe("/signup");
  //   });
});
