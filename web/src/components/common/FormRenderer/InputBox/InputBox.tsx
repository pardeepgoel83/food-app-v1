import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const InputBox = (props: any) => {
  const { label, name, ...rest } = props;
  const type = rest.type || null;
  // console.log(rest);
  return (
    <>
      {type && type === "hidden" ? (
        <Field id={name} name={name} {...rest} />
      ) : (
        <div className="form-control">
          <label htmlFor={name}>{label}</label>
          <Field id={name} name={name} {...rest} />
          <ErrorMessage component={TextError} name={name} />
        </div>
      )}
    </>
  );
};

export default InputBox;
