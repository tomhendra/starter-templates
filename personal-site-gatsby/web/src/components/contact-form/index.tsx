import React, { useState } from 'react';
import axios from 'axios';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { Button, ButtonGroup, Card, InlineLink, Tooltip } from '..';

import { StyledForm } from './styled';
import { TextInput, Textarea, Checkbox } from './components';

import { Variants } from 'types';

type Props = {
  variant: Variants;
};

export const ContactForm = ({ variant = 'secondary' }: Props) => {
  // define character max lengths
  const firstNameMaxLength = 20;
  const lastNameMaxLength = 20;
  const messageMaxLength = 500;

  // Server State Handling
  type ServerResponse = {
    ok: boolean;
    msg: string;
  };

  const [serverState, setServerState] = useState<ServerResponse | undefined>(
    undefined,
  );

  const handleServerResponse = (ok: boolean, msg: string) => {
    setServerState({
      ok,
      msg,
    });
  };

  // submit handling
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    acceptedTerms: boolean;
  };

  const handleOnSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    await axios({
      method: 'POST',
      url: 'https://formspree.io/mayyjyqa',
      data: values,
    })
      .then(() => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, 'Message submitted. Thank you!');
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        acceptedTerms: false,
      }}
      // override onSubmit using custom function as advised by Formspree
      // https://formspree.io/blog/react-forms-3/
      onSubmit={handleOnSubmit}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(
            firstNameMaxLength,
            `Must be ${firstNameMaxLength} characters or less`,
          )
          .required('Required'),
        lastName: Yup.string()
          .max(
            lastNameMaxLength,
            `Must be ${lastNameMaxLength} characters or less`,
          )
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string()
          .max(
            messageMaxLength,
            `Must be ${messageMaxLength} characters or less`,
          )
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'Please agree to the privacy policy.'),
      })}
    >
      {/* destructure helper methods from props */}
      {({ isSubmitting, handleReset }) => (
        <Card padding={['echo', 'golf']} accent="accentBravo" variant={variant}>
          <StyledForm id="fs-frm" noValidate>
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from tomhendra.dev"
            />
            <TextInput
              variant={variant}
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Maggie"
            />
            <TextInput
              variant={variant}
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Simpson"
            />
            <TextInput
              variant={variant}
              label="Email Address"
              name="email"
              type="email"
              placeholder="maggie@fox.com"
            />
            <Textarea
              variant={variant}
              label="Message"
              name="message"
              rows={8}
              placeholder="Your message (maximum 500 characters)"
              messageMaxLength={messageMaxLength}
            />
            <Checkbox name="acceptedTerms" variant={variant}>
              I agree to the&nbsp;
              <InlineLink internalLink="/privacy-policy/">
                privacy policy
              </InlineLink>
            </Checkbox>
            <ButtonGroup>
              <Button variant="tertiary" size="alpha" onClick={handleReset}>
                Reset
              </Button>
              <Button
                variant="primary"
                size="alpha"
                type="submit"
                disabled={isSubmitting}
              >
                {!serverState && !isSubmitting
                  ? 'Send'
                  : !serverState && isSubmitting
                  ? 'Sending message...'
                  : serverState && serverState.ok && 'Message sent!'}
              </Button>
              {serverState && !serverState.ok && (
                <Tooltip variant="danger" align="end" position="top">
                  {serverState.msg}
                </Tooltip>
              )}
            </ButtonGroup>
          </StyledForm>
        </Card>
      )}
    </Formik>
  );
};
