import React from 'react';
import { render } from 'react-testing-library';
import { Label, LabelsProvider } from '../src/index';

const LABELS = {
  en_GB: {
    APPOINTMENTS: 'Appointments',
    SIGN_IN: 'Sign In',
    LOGIN: 'Login',
    EMAIL: 'Email'
  },
  it_IT: {
    APPOINTMENTS: 'Appointments',
    SIGN_IN: 'Sign In',
    LOGIN: 'Login',
    EMAIL: 'Email'
  }
};

describe('Labels package', () => {
  describe('Label', () => {
    it('should render nothing if labels does not exist', () => {
      const {  queryByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <Label text="LOGIN_FAKE"></Label>
        </LabelsProvider>
      );

      expect(queryByText('Login')).toBeNull();
    });

    it('should render nothing if labels does not exist', () => {
      const {  getByText } = render(
        <LabelsProvider language="en_GB" labels={LABELS}>
          <div>
            <p>
              <Label text="LOGIN"></Label>            
            </p>
          </div>
        </LabelsProvider>
      );

      expect(getByText('Login')).toBeDefined();
    });
  });
});
