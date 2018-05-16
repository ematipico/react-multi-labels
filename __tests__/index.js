import React from "react";
import { render } from "react-testing-library";
import { Label, LabelsProvider, GetLabel, GetLabels } from "../src/index";

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
