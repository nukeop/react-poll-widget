import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import { FieldsPropsType, FormValue } from '@react-poll-widget/ui/src/components/types';

export type FormFieldInit = {
  name: string;
  label?: string;
  placeholder?: string;
  initialValue?: FormValue;
}

export type InitialFormFields = {
  [k: string]: FormFieldInit;
}

export type SubmitValues = {
  [k: string]: any;
}

export type WithFormProps = {
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  fieldsProps: FieldsPropsType;
}

export const withForm = ({
  initialFields,
  onSubmit,
  validationSchema
}: {
  initialFields: InitialFormFields,
  onSubmit: (values: SubmitValues, formikHelpers: FormikHelpers<any>) => void | Promise<any>,
  validationSchema?: Yup.AnySchema
}) =>
<P extends object>(Component: React.ComponentType<P & WithFormProps>): React.ComponentType<P> => {
    return (props) => <Formik
      initialValues={_.chain(initialFields).map((field, key) => [key, field.initialValue]).fromPairs().value()}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {
        ({
          values,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting
        }) =>
          <Component
            {...props}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            fieldsProps={_.chain(initialFields).map((field, key) => [
              key, {
                name: field.name,
                label: field.label,
                placeholder: field.placeholder,
                value: values[key],
                error: errors[key],
                onChange: handleChange,
                onBlur: handleBlur
              }
            ]).fromPairs().value()}
          />
      }
    </Formik>;
  }