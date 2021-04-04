const Icon = ({ icon, size, onClick }) => {
  const getIcon = () => {
    switch (icon) {
      case "bar":
        return (
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height={size}
            width={size}
          >
            <path d="M4 11H16V13H4zM4 6H20V8H4zM4 18L11 18 11.235 18 11.235 16 11 16 4 16z"></path>
          </svg>
        );

      case "search":
        return (
          <svg
            stroke="white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height={size}
            width={size}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        );

      case "back":
        return (
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height={size}
            width={size}
          >
            <path d="M21 11L6.414 11 11.707 5.707 10.293 4.293 2.586 12 10.293 19.707 11.707 18.293 6.414 13 21 13z"></path>
          </svg>
        );

      case "pokeball":
        return (
          <svg
            stroke="white"
            fill="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height={size}
            width={size}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              fill="white"
            ></path>
          </svg>
        );

      default:
        return <span></span>;
    }
  };

  return <span onClick={onClick}>{getIcon()}</span>;
};
export default Icon;
