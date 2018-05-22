import React from "react";
import { render, Simulate } from "react-testing-library";
import { Label, LabelsProvider, GetLabel, GetLabels, ChangeLabels } from "../src/index";

const LABELS = {
  en_GB: {
    APPOINTMENTS: "Appointments",
    SIGN_IN: "Sign In",
    LOGIN: "Login",
    EMAIL: "Email"
  },
  it_IT: {
    APPOINTMENTS: "Appointments",
    SIGN_IN: "Sign In",
    LOGIN: "Login",
    EMAIL: "Email"
  }
};

describe("Labels package", () => {
  describe("Label", () => {
    it("should render nothing if labels does not exist", () => {
      const { queryByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <Label text="LOGIN_FAKE" />
        </LabelsProvider>
      );

      expect(queryByText("Login")).toBeNull();
    });

    it("should render nothing if labels does not exist", () => {
      const { getByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <div>
            <p>
              <Label text="LOGIN" />
            </p>
          </div>
        </LabelsProvider>
      );

      expect(getByText("Login")).toBeDefined();
    });
  });

  describe("GetLabel", () => {
    it("should render nothing if labels does not exist", () => {
      const { queryByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <GetLabel text={"NOTHING"}>
            {label => {
              return <p>{label}</p>;
            }}
          </GetLabel>
        </LabelsProvider>
      );

      expect(queryByText("Nothing")).toBeNull();
    });

    it("should render nothing if labels does not exist", () => {
      const { getByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <GetLabel text={"LOGIN"}>
            {label => {
              return <p>{label}</p>;
            }}
          </GetLabel>
        </LabelsProvider>
      );

      expect(getByText("Login")).toBeDefined();
    });
  });

  describe("GetLabels", () => {
    it("should render nothing if labels does not exist", () => {
      const { queryByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <GetLabels list={["NOTHING", "FAKE"]}>
            {({ NOTHING, FAKE }) => {
              return (
                <p>
                  {NOTHING} - {FAKE}
                </p>
              );
            }}
          </GetLabels>
        </LabelsProvider>
      );

      expect(queryByText("Nothing - Fake")).toBeNull();
    });

    it("should render nothing if labels does not exist", () => {
      const { getByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <GetLabels list={["LOGIN", "EMAIL"]}>
            {({ LOGIN, EMAIL }) => {
              return (
                <p>
                  {LOGIN} - {EMAIL}
                </p>
              );
            }}
          </GetLabels>
        </LabelsProvider>
      );

      expect(getByText("Login - Email")).toBeDefined();
    });
  });
});

describe("ChangeLabels", () => {
  it("should change with the new labels provided", () => {
    const newLabels = {
      en_GB: {
        LOGIN: "Shiny login",
        EMAIL: "Dark email"
      }
    };

    const { getByText, queryByText } = render(
      <LabelsProvider language="en_GB" labels={LABELS}>
        <React.Fragment>
          <GetLabels list={["LOGIN", "EMAIL"]}>
            {({ LOGIN, EMAIL }) => {
              return (
                <p>
                  {LOGIN} - {EMAIL}
                </p>
              );
            }}
          </GetLabels>
          <ChangeLabels>
            {({ changeLabels }) => {
              return <button onClick={() => changeLabels(newLabels)}>Click me!</button>;
            }}
          </ChangeLabels>
        </React.Fragment>
      </LabelsProvider>
    );
    Simulate.click(getByText("Click me!"));
    expect(queryByText("Shiny Login - Dark email")).toBeDefined();
  });
});
