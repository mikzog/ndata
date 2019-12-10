import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

interface Props {
  code?: string;
}

const options = {
  selectOnLineNumbers: true,
  minimap: {
    enabled: false,
  },
};

export const Editor: React.FC<Props> = ({ code }) => {
  const [value, setValue] = useState(code);
  const handleChange = (newValue: string, e: any) => {
    console.log({ newValue, e });
    setValue(newValue);
  };

  return (
    <MonacoEditor
      language="python"
      height={725}
      value={value}
      options={options}
      onChange={handleChange}
    />
  );
};

Editor.defaultProps = {
  code: `# Python program to find the factorial of a number provided by the user.
# change the value for a different result
num = 7
# To take input from the user
#num = int(input("Enter a number: "))
factorial = 1
# check if the number is negative, positive or zero
if num < 0:
  print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
  print("The factorial of 0 is 1")
else:
  for i in range(1,num + 1):
    factorial = factorial*i
    print("The factorial of",num,"is",factorial)
`,
};

export default Editor;
