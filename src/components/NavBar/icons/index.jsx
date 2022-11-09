const NavBarIcon = ({ name, dashboard, configData, documentary }) => {
  return name === "dashboard" ? (
    <DashboardIcon dashboard={dashboard} />
  ) : name === "documentary" ? (
    <DocumentaryIcon documentary={documentary} />
  ) : name === "managment" ? (
    <ManagmentIcon configData={configData} />
  ) : (
    <></>
  );
};

const DashboardIcon = ({ dashboard }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={dashboard}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1H2C1.44772 1 1 1.44772 1 2V12C1 12.5523 1.44772 13 2 13H9C9.55229 13 10 12.5523 10 12V2C10 1.44772 9.55228 1 9 1ZM2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.895431 14 2 14H9C10.1046 14 11 13.1046 11 12V2C11 0.895431 10.1046 0 9 0H2Z"
        fill={dashboard}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11H15C14.4477 11 14 11.4477 14 12V22C14 22.5523 14.4477 23 15 23H22C22.5523 23 23 22.5523 23 22V12C23 11.4477 22.5523 11 22 11ZM15 10C13.8954 10 13 10.8954 13 12V22C13 23.1046 13.8954 24 15 24H22C23.1046 24 24 23.1046 24 22V12C24 10.8954 23.1046 10 22 10H15Z"
        fill={dashboard}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 1H15C14.4477 1 14 1.44772 14 2V6C14 6.55228 14.4477 7 15 7H22C22.5523 7 23 6.55228 23 6V2C23 1.44772 22.5523 1 22 1ZM15 0C13.8954 0 13 0.895431 13 2V6C13 7.10457 13.8954 8 15 8H22C23.1046 8 24 7.10457 24 6V2C24 0.895431 23.1046 0 22 0H15Z"
        fill={dashboard}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17H2C1.44772 17 1 17.4477 1 18V22C1 22.5523 1.44772 23 2 23H9C9.55228 23 10 22.5523 10 22V18C10 17.4477 9.55228 17 9 17ZM2 16C0.895431 16 0 16.8954 0 18V22C0 23.1046 0.895431 24 2 24H9C10.1046 24 11 23.1046 11 22V18C11 16.8954 10.1046 16 9 16H2Z"
        fill={dashboard}
      />
    </svg>
  );
};

const DocumentaryIcon = ({ documentary }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={documentary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 10H2V23H22V10ZM2 9C1.44772 9 1 9.44772 1 10V23C1 23.5523 1.44772 24 2 24H22C22.5523 24 23 23.5523 23 23V10C23 9.44772 22.5523 9 22 9H2Z"
        fill={documentary}
      />
      <path d="M6 0H17L20 3V10H6V0Z" fill={documentary} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5858 1H7V9H19V3.41421L16.5858 1ZM17 0H6V10H20V3L17 0Z"
        fill={documentary}
      />
      <path d="M4 2H15L18 5V10H4V2Z" fill={documentary} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5858 3H5V9H17V5.41421L14.5858 3ZM15 2H4V10H18V5L15 2Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6H7V5H15V6Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 8H7V7H15V8Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.5C11.7239 14.5 11.5 14.7239 11.5 15V21C11.5 21.2761 11.7239 21.5 12 21.5H20C20.2761 21.5 20.5 21.2761 20.5 21V15C20.5 14.7239 20.2761 14.5 20 14.5H17.5V13.5H20C20.8284 13.5 21.5 14.1716 21.5 15V21C21.5 21.8284 20.8284 22.5 20 22.5H12C11.1716 22.5 10.5 21.8284 10.5 21V15C10.5 14.1716 11.1716 13.5 12 13.5H14.5V14.5H12Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 16.5C13 16.2239 13.2239 16 13.5 16H18.5C18.7761 16 19 16.2239 19 16.5C19 16.7761 18.7761 17 18.5 17H13.5C13.2239 17 13 16.7761 13 16.5Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 18.5C13 18.2239 13.2239 18 13.5 18H18.5C18.7761 18 19 18.2239 19 18.5C19 18.7761 18.7761 19 18.5 19H13.5C13.2239 19 13 18.7761 13 18.5Z"
        fill={documentary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 20.5C13 20.2239 13.2239 20 13.5 20H18.5C18.7761 20 19 20.2239 19 20.5C19 20.7761 18.7761 21 18.5 21H13.5C13.2239 21 13 20.7761 13 20.5Z"
        fill={documentary}
      />
    </svg>
  );
};

const ManagmentIcon = ({ configData }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={configData}
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_306_73" fill={configData}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7905 3.88578C13.0862 2.35725 10.9138 2.35725 10.2095 3.88578L10.1454 4.02496C9.71473 4.95959 8.63763 5.40574 7.67221 5.04938L7.52846 4.99632C5.94959 4.41351 4.41351 5.94959 4.99632 7.52846L5.04938 7.67222C5.40574 8.63763 4.95959 9.71473 4.02496 10.1454L3.88578 10.2095C2.35725 10.9138 2.35725 13.0862 3.88578 13.7905L4.02496 13.8546C4.95959 14.2853 5.40574 15.3624 5.04938 16.3278L4.99632 16.4716C4.41351 18.0505 5.94959 19.5865 7.52846 19.0037L7.67222 18.9507C8.63763 18.5943 9.71473 19.0404 10.1454 19.9751L10.2095 20.1143C10.9138 21.6428 13.0862 21.6428 13.7905 20.1143L13.8546 19.9751C14.2853 19.0404 15.3624 18.5943 16.3278 18.9507L16.4716 19.0037C18.0505 19.5865 19.5865 18.0505 19.0037 16.4716L18.9507 16.3278C18.5943 15.3624 19.0404 14.2853 19.9751 13.8546L20.1143 13.7905C21.6428 13.0862 21.6428 10.9138 20.1143 10.2095L19.9751 10.1454C19.0404 9.71473 18.5943 8.63763 18.9507 7.67221L19.0037 7.52846C19.5865 5.94959 18.0505 4.41351 16.4716 4.99632L16.3278 5.04938C15.3624 5.40574 14.2853 4.95959 13.8546 4.02496L13.7905 3.88578ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        />
      </mask>
      <path
        d="M10.2095 3.88578L11.1177 4.30428L11.1177 4.30427L10.2095 3.88578ZM13.7905 3.88578L12.8823 4.30427L12.8823 4.30427L13.7905 3.88578ZM10.1454 4.02496L9.23718 3.60646L9.23718 3.60647L10.1454 4.02496ZM7.67221 5.04938L7.32592 5.98751L7.32592 5.98751L7.67221 5.04938ZM7.52846 4.99632L7.87475 4.05819L7.87475 4.05819L7.52846 4.99632ZM4.99632 7.52846L4.05819 7.87475L4.05819 7.87475L4.99632 7.52846ZM5.04938 7.67222L5.98751 7.32593L5.98751 7.32593L5.04938 7.67222ZM4.02496 10.1454L3.60646 9.23718L3.60646 9.23718L4.02496 10.1454ZM3.88578 10.2095L4.30427 11.1177L4.30427 11.1177L3.88578 10.2095ZM3.88578 13.7905L4.30428 12.8823L4.30428 12.8823L3.88578 13.7905ZM4.02496 13.8546L3.60646 14.7629L3.60646 14.7629L4.02496 13.8546ZM5.04938 16.3278L5.98751 16.6741L5.98751 16.6741L5.04938 16.3278ZM4.99632 16.4716L4.05819 16.1253L4.05819 16.1253L4.99632 16.4716ZM7.52846 19.0037L7.87475 19.9419L7.87475 19.9418L7.52846 19.0037ZM7.67222 18.9507L7.32593 18.0125L7.32592 18.0125L7.67222 18.9507ZM10.1454 19.9751L9.23718 20.3936L9.23718 20.3936L10.1454 19.9751ZM10.2095 20.1143L11.1177 19.6958L11.1177 19.6958L10.2095 20.1143ZM13.7905 20.1143L12.8823 19.6958L12.8823 19.6958L13.7905 20.1143ZM13.8546 19.9751L14.7629 20.3936L14.7629 20.3936L13.8546 19.9751ZM16.3278 18.9507L15.9815 19.8888L15.9815 19.8888L16.3278 18.9507ZM16.4716 19.0037L16.8179 18.0656L16.8179 18.0656L16.4716 19.0037ZM19.0037 16.4716L19.9419 16.1253L19.9418 16.1253L19.0037 16.4716ZM18.9507 16.3278L18.0125 16.6741L18.0125 16.6741L18.9507 16.3278ZM19.9751 13.8546L20.3936 14.7629L20.3936 14.7629L19.9751 13.8546ZM20.1143 13.7905L19.6958 12.8823L19.6958 12.8823L20.1143 13.7905ZM20.1143 10.2095L19.6958 11.1177L19.6958 11.1177L20.1143 10.2095ZM19.9751 10.1454L20.3936 9.23718L20.3936 9.23718L19.9751 10.1454ZM18.9507 7.67221L19.8888 8.0185L19.8888 8.0185L18.9507 7.67221ZM19.0037 7.52846L18.0656 7.18217L18.0656 7.18217L19.0037 7.52846ZM16.4716 4.99632L16.1253 4.05819L16.1253 4.05819L16.4716 4.99632ZM16.3278 5.04938L16.6741 5.98751L16.6741 5.98751L16.3278 5.04938ZM13.8546 4.02496L14.7629 3.60646L14.7629 3.60646L13.8546 4.02496ZM11.1177 4.30427C11.4648 3.55108 12.5352 3.55108 12.8823 4.30427L14.6987 3.46729C13.6371 1.16341 10.3629 1.16341 9.30131 3.46729L11.1177 4.30427ZM11.0536 4.44345L11.1177 4.30428L9.30131 3.46729L9.23718 3.60646L11.0536 4.44345ZM7.32592 5.98751C8.78104 6.52463 10.4045 5.85218 11.0536 4.44345L9.23718 3.60647C9.02496 4.06701 8.49422 4.28685 8.0185 4.11125L7.32592 5.98751ZM7.18217 5.93444L7.32592 5.98751L8.01851 4.11125L7.87475 4.05819L7.18217 5.93444ZM5.93444 7.18217C5.64726 6.40417 6.40417 5.64726 7.18217 5.93444L7.87475 4.05819C5.495 3.17976 3.17976 5.495 4.05819 7.87475L5.93444 7.18217ZM5.98751 7.32593L5.93444 7.18217L4.05819 7.87475L4.11125 8.01851L5.98751 7.32593ZM4.44345 11.0536C5.85217 10.4045 6.52463 8.78104 5.98751 7.32593L4.11125 8.01851C4.28685 8.49422 4.06701 9.02496 3.60646 9.23718L4.44345 11.0536ZM4.30427 11.1177L4.44345 11.0536L3.60646 9.23718L3.46729 9.30131L4.30427 11.1177ZM4.30428 12.8823C3.55108 12.5352 3.55108 11.4648 4.30427 11.1177L3.46729 9.30131C1.16341 10.3629 1.16341 13.6371 3.46729 14.6987L4.30428 12.8823ZM4.44345 12.9464L4.30428 12.8823L3.46729 14.6987L3.60646 14.7629L4.44345 12.9464ZM5.98751 16.6741C6.52463 15.219 5.85217 13.5955 4.44345 12.9464L3.60646 14.7629C4.06701 14.9751 4.28685 15.5058 4.11125 15.9815L5.98751 16.6741ZM5.93444 16.8179L5.98751 16.6741L4.11125 15.9815L4.05819 16.1253L5.93444 16.8179ZM7.18217 18.0656C6.40417 18.3528 5.64726 17.5959 5.93444 16.8179L4.05819 16.1253C3.17976 18.505 5.495 20.8203 7.87475 19.9419L7.18217 18.0656ZM7.32592 18.0125L7.18216 18.0656L7.87475 19.9418L8.01851 19.8888L7.32592 18.0125ZM11.0536 19.5566C10.4045 18.1479 8.78104 17.4754 7.32593 18.0125L8.01851 19.8888C8.49422 19.7132 9.02496 19.933 9.23718 20.3936L11.0536 19.5566ZM11.1177 19.6958L11.0536 19.5566L9.23718 20.3936L9.30131 20.5328L11.1177 19.6958ZM12.8823 19.6958C12.5352 20.449 11.4648 20.449 11.1177 19.6958L9.30131 20.5328C10.3629 22.8366 13.6371 22.8366 14.6987 20.5328L12.8823 19.6958ZM12.9464 19.5566L12.8823 19.6958L14.6987 20.5328L14.7629 20.3936L12.9464 19.5566ZM16.6741 18.0125C15.219 17.4754 13.5955 18.1479 12.9464 19.5566L14.7629 20.3936C14.9751 19.933 15.5058 19.7132 15.9815 19.8888L16.6741 18.0125ZM16.8179 18.0656L16.6741 18.0125L15.9815 19.8888L16.1253 19.9419L16.8179 18.0656ZM18.0656 16.8179C18.3528 17.5959 17.5959 18.3528 16.8179 18.0656L16.1253 19.9419C18.505 20.8203 20.8203 18.505 19.9419 16.1253L18.0656 16.8179ZM18.0125 16.6741L18.0656 16.8179L19.9418 16.1253L19.8888 15.9815L18.0125 16.6741ZM19.5566 12.9464C18.1479 13.5955 17.4754 15.219 18.0125 16.6741L19.8888 15.9815C19.7132 15.5058 19.933 14.9751 20.3936 14.7629L19.5566 12.9464ZM19.6958 12.8823L19.5566 12.9464L20.3936 14.7629L20.5328 14.6987L19.6958 12.8823ZM19.6958 11.1177C20.449 11.4648 20.449 12.5352 19.6958 12.8823L20.5328 14.6987C22.8366 13.6371 22.8366 10.3629 20.5328 9.30131L19.6958 11.1177ZM19.5566 11.0536L19.6958 11.1177L20.5328 9.30131L20.3936 9.23718L19.5566 11.0536ZM18.0125 7.32592C17.4754 8.78104 18.1479 10.4045 19.5566 11.0536L20.3936 9.23718C19.933 9.02496 19.7132 8.49422 19.8888 8.0185L18.0125 7.32592ZM18.0656 7.18217L18.0125 7.32593L19.8888 8.0185L19.9419 7.87474L18.0656 7.18217ZM16.8179 5.93444C17.5959 5.64726 18.3528 6.40417 18.0656 7.18217L19.9419 7.87475C20.8203 5.495 18.505 3.17976 16.1253 4.05819L16.8179 5.93444ZM16.6741 5.98751L16.8179 5.93444L16.1253 4.05819L15.9815 4.11125L16.6741 5.98751ZM12.9464 4.44345C13.5955 5.85217 15.219 6.52463 16.6741 5.98751L15.9815 4.11125C15.5058 4.28685 14.9751 4.06701 14.7629 3.60646L12.9464 4.44345ZM12.8823 4.30427L12.9464 4.44345L14.7629 3.60646L14.6987 3.46729L12.8823 4.30427ZM13 12C13 12.5523 12.5523 13 12 13V15C13.6569 15 15 13.6569 15 12H13ZM12 11C12.5523 11 13 11.4477 13 12H15C15 10.3432 13.6569 9.00002 12 9.00002V11ZM11 12C11 11.4477 11.4477 11 12 11V9.00002C10.3432 9.00002 9.00002 10.3432 9.00002 12H11ZM12 13C11.4477 13 11 12.5523 11 12H9.00002C9.00002 13.6569 10.3432 15 12 15V13Z"
        fill={configData}
        mask="url(#path-1-inside-1_306_73)"
      />
    </svg>
  );
};

export default NavBarIcon;
