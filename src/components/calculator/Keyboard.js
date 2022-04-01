import Key from "../common/Key";

const Keyboard = ({ onClickKey, data: { digits, operators } }) => {
  
  const handleClickKey = ({ target: { value } }) => onClickKey(value);

  return (
    <>
      <div className="flex items-stretch bg-blue-900 h-32">
        {operators.map((operator, index) => (
          <Key key={`o-${index}`} text={operator} onClick={handleClickKey} />
        ))}
      </div>
      {digits.map((digitsGroup, index) => {
        return (
          <div
            key={`rd-${index}`}
            className="flex items-stretch bg-blue-600 h-32 "
          >
            {digitsGroup.map((digit, dIndex) => (
              <Key
                key={`d-${index}${dIndex}`}
                text={digit}
                onClick={handleClickKey}
                isDigit
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Keyboard;
