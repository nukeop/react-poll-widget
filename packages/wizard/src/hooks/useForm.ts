import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik'
import _ from 'lodash'

import { FieldsPropsType, FormValue } from "@react-poll-widget/ui/src/components/types"

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

export type UseFormProps = {
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  fieldsProps: FieldsPropsType;
}

export const useForm: ({
  onSubmit,
  initialFields,
  validationSchema
}: {
  onSubmit: (values: SubmitValues, formikHelpers: FormikHelpers<any>) => void | Promise<any>,
  initialFields: InitialFormFields,
  validationSchema?: Yup.AnySchema
}) => UseFormProps = ({
  onSubmit,
  initialFields,
  validationSchema
}) => {
    const formik = useFormik({
      initialValues: _.chain(initialFields).map((field, key) => [key, field.initialValue]).fromPairs().value(),
      onSubmit,
      validationSchema
    });

    return {
      onSubmit: formik.handleSubmit,
      isSubmitting: formik.isSubmitting,

      fieldsProps: _.chain(initialFields).map((field, key) => [
        key, {
          name: field.name,
          label: field.label,
          placeholder: field.placeholder,
          value: formik.values[key],
          error: formik.errors[key],
          onChange: formik.handleChange,
          onBlur: formik.handleBlur
        }
      ]).fromPairs().value()
    }
  }