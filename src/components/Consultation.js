import React, { useState } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import {Grid, Typography, Button, Snackbar, CircularProgress, Hidden, useMediaQuery, TextField, DialogContent, Dialog, IconButton, } from "@material-ui/core";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import herbs from "../assets/herbs.svg";
import tincture from "../assets/tincture.svg";
import giftest from "../assets/giftest.gif"

const useStyles = makeStyles(theme => ({
  icon: {
    width: "12em",
    height: "10em"
  },
  consultationButton: {
    ...theme.typography.consultation,
    borderRadius: 50,
    backgroundColor: theme.palette.common.red,
    height: 50,
    width: 225,
    marginTop: "5em",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.teal}`,
    marginTop: "1em", //double check this after removing phone field
    marginBottom: "2em",
    borderRadius: 5
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2rem",
    color: theme.palette.common.red
  }
}));

//extract each set of questions out into their own file
//or store in mongodb and use an express server
const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Service 1",  //tinctures
        subtitle: null,
        icon: tincture,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Service 2",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Service 3",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      }
    ]
  }
];

const tinctureQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",  //this can maybe just be - consultation survey for custom tincture?
    active: false,
    options: [
      {
        id: 1,
        title: "Service 1", //tinctures
        subtitle: null,
        icon: tincture,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Service 2",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Service 3",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      }
    ]
  },
  {
    id: 2,
    title: "What are your main concerns?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Pain",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      },
      {
        id: 2,
        title: "Stress",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      },
      {
        id: 3,
        title: "Anxiety",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "What ails you my friend?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "ailment",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 2
      },
      {
        id: 2,
        title: "ailment",
        subtitle: null,
        icon: tincture,
        iconAlt: "imagalt",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "ailment",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "What ails you my friend?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "ailment",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "ailment",
        subtitle: null,
        icon: tincture,
        iconAlt: "imagalt",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "ailment",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Special Requests?",
    subtitle: "Select one.",    //not sure if this will be multiple, decide later
    options: [
      {
        id: 1,
        title: "Include Honey",
        subtitle: "(Locally sourced honey)",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      },
      {
        id: 2,
        title: "Include Elderberry Syrup",
        subtitle: "(Made with locally tall-guy picked elderberries)",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      },
      {
        id: 3,  //this probably wouldn't be a real option for a tincture with more than one ingredient... right?
        title: "Orange Infused Grain Spirits",  
        subtitle: "(Premium grain spirits infused with orange)",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 10
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "What size tincture?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "1oz",
        subtitle: null,
        icon: tincture,
        iconAlt: "tincture",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "2oz",
        subtitle: null,
        icon: tincture, //have different size tincture icons for these option
        iconAlt: "tincture",
        selected: false,
        cost: 1.75
      },
      // {
      //   id: 3,
      //   title: "4oz",
      //   subtitle: null,
      //   icon: tincture,
      //   iconAlt: "tincture",
      //   selected: false,
      //   cost: 1.25
      // }
    ],
    active: false
  }
  //id 7 could be custom label? would need to add that to state
];

//this is the current 2 question set -- will need to change consultationDisabled() when this is added 
const additionalQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: false,
    options: [
      {
        id: 1,
        title: "Service 1", //tinctures
        subtitle: null,
        icon: tincture,
        iconAlt: "tincture",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Service 2",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Service 3",
        subtitle: null,
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 0
      }
    ]
  },
  {
    id: 2,
    title: "Any interest in these subservices?",  //not sure if we'll use this section but this is a placeholder
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Sub service 1",
        subtitle: "sub sub sub",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 200
      },
      {
        id: 2,
        title: "Sub service 2",
        subtitle: "sub sub sub",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Sub service 3",
        subtitle: "sub sub sub",
        icon: herbs,
        iconAlt: "imagalt",
        selected: false,
        cost: 200
      }
    ],
    active: true
  }
];

export default function Consultation() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [concerns, setConcerns] = useState([]);
  const [ailments, setAilments] = useState([]);
  const [specialRequests, setSpecialRequests] = useState("");
  const [tinctureSize, setTinctureSize] = useState("");   
  const [subService, setSubService] = useState("");

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const [loading, setLoading] = useState(false);

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions); //making actual copy that keep nested values and doesn't alter original

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1; //because array index is one less as ids do not start at 0
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);  //making actual copy that keep nested values and doesn't alter original

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;  //because array index is one less as ids do not start at 0
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const backButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;
    //keep in mind this id 1 is only the first question of default
    if (activeId === 1) return true;
    else return false;
  };

  const forwardButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === questions[questions.length - 1].id) return true;
    else return false;
  };

  const consultationDisabled = () => {
    let disabled = true;

    const emptySelections = questions
      .map(question => question.options.filter(option => option.selected))
      .filter(question => question.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) { //the first question will always be an empty selection
        return false;          //so if one is selected here, for the 2 question set, enable button
      }                        //will want to change this when this set is actually added to be dynamic
    } else if (questions.length === 1) {
      return true;
    } else {
      if (
        emptySelections.length < 3 &&
        questions[questions.length - 1].options.filter(
          option => option.selected
        ).length > 0
      ) {  //this logic will only work with having the service and tincture size question in place
        return false;    //will need to refactor if that setup changes
      }
    }

    return disabled;
  };

  const handleSelect = id => {
    const newQuestions = cloneDeep(questions);  //making actual copy that keep nested values and doesn't alter original

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];

    const previousSelected = currentlyActive[0].options.filter(
      option => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.": //this is for questions that can only have one response clicked on at a time
        if (previousSelected[0]) {  //could also just add a property on the question of multi or single
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Service 1": //tinctures
        setQuestions(tinctureQuestions);
        setService(newSelected.title);
        setConcerns([]);
        setAilments([]);
        setSpecialRequests("");
        setTinctureSize("");
        setSubService("");
        break;
      case "Service 2":
        setQuestions(tinctureQuestions);
        setService(newSelected.title);
        setConcerns([]);
        setAilments([]);
        setSpecialRequests("");
        setTinctureSize("");
        setSubService("");
        break;
      case "Service 3":
        setQuestions(additionalQuestions);
        setService(newSelected.title);
        setConcerns([]);
        setAilments([]);
        setSpecialRequests("");
        setTinctureSize("");
        setSubService("");
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      // case "phone":
      //   setPhone(event.target.value);
      //   valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      //     event.target.value
      //   );

      //   if (!valid) {
      //     setPhoneHelper("Invalid phone");
      //   } else {
      //     setPhoneHelper("");
      //   }
      //   break;
      default:
        break;
    }
  };
  //the getTotal function can be used to show client price or just to send the idea in an email with a manual follow up
  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map(question => question.options.filter(option => option.selected))
      .filter(question => question.length > 0); //this gets rid of the first question which is selecting the service (will just be one (tinctures) for now)

    selections.map(options => options.map(option => (cost += option.cost))); //this will get the options from all sets of questions

    if (questions.length > 1) {  //will only use one set of questions first; revise this logic after adding more services, use 1 test question in other services
      const tinctureSize = questions
        .filter(question => question.title === "What size tincture?") //will want to add info to this question for the client
        .map(question =>
          question.options.filter(option => option.selected)
        )[0][0];

      setTinctureSize(tinctureSize.title);

      cost -= tinctureSize.cost; //getting rid of the multiplier as a cost
      cost *= tinctureSize.cost; //then applying the multiplier
    }

    setTotal(cost);
  };

  const getConcerns = () => {
    if (questions.length > 2) {
      let newConcerns = [];

      questions
        .filter(
          question =>
            question.title === "What are your main concerns?"
        )
        .map(question => question.options.filter(option => option.selected))[0]
        .map(option => newConcerns.push(option.title));

      setConcerns(newConcerns);
    }
  };

  const getAilments = () => {
    if (questions.length > 2) {
      let newAilments = [];

      questions
        .filter(
          question => question.title === "What ails you my friend?"
        )
        .map(question => question.options.filter(option => option.selected))
        .map(option =>
          option.map(newAilment => newAilments.push(newAilment.title))
        );

      setAilments(newAilments);
    }
  };

  const getSpecialRequests = () => {
    if (questions.length > 2) { //then we're in tincture questions -- double check and refactor this later
      const newSpecialRequests = questions
        .filter(
          question =>
            question.title ===
            "Special Requests?"
        )
        .map(question =>
          question.options.filter(option => option.selected)
        )[0][0].title;

      setSpecialRequests(newSpecialRequests);
    }
  };

  const getSubService = () => {
    if (questions.length === 2) { //refactor this once we actually have subservices
      const newSubService = questions   //until then have tinctures be the only option
        .filter(
          question =>
            question.title === "Any interest in these subservices?"
        )[0]
        .options.filter(option => option.selected)[0].title;

      setSubService(newSubService);
    }
  };

  const sendConsultation = () => {
    setLoading(true);

    axios
      .get(
        "https://us-central1-rainier-elixirs.cloudfunctions.net/sendMail",
        {
          params: {
            email: email,
            name: name,
            //phone: phone,
            message: message,
            total: total,
            subService: subService,
            service: service,
            concerns: concerns,
            ailments: ailments,
            specialRequests: specialRequests,
            tinctureSize: tinctureSize
          }
        }
      )
      .then(res => {
        setLoading(false);
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
        setDialogOpen(false);
      })
      .catch(err => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };

  const concernsAndAilmentsSelections = (
    //refactor this mess to be easier and just list the ailments/requests they have
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />  {/* image / animation / video next to consulation form start */}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You'd like to inquire about a ${service} `}  {/* this should always be service 1 for now */}
            {concerns.length > 0
              ? `for ${                             //refactor all of this to be more dynamic
                  concerns.indexOf("Pain") > -1 && //-1 check just means it is in there
                  concerns.length === 1 ? "Pain."
                    : concerns.indexOf("Pain") > -1 && concerns.length === 2
                    ? `Pain and ${concerns[1]}.`
                    : concerns.length === 1
                    ? `${concerns[0]}`
                    : concerns.length === 2
                    ? `Stress and Anxiety. - this should be the same: ${concerns[0]} and ${concerns[1]}`
                    : concerns.length === 3
                    ? `Pain, Stress, and Anxiety - this should be the same: ${concerns[0]}, ${concerns[1]} and ${concerns[2]}`
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"hoping to remedy "}
            {/* if we have ailments... */}
            {ailments.length > 0
              ? //...and there's only 1...
                ailments.length === 1
                ? //then end the sentence here
                  `${ailments[0]}.`
                : //otherwise, if there are two ailments...
                ailments.length === 2
                ? //...then end the sentence here
                  `${ailments[0]} and ${ailments[1]}.`
                : //otherwise, if there are three or more ailments...
                  ailments
                    //filter out the very last ailment...
                    .filter((ailment, index) => index !== ailments.length - 1)  //this will be the last one
                    //and for those ailments return their name...
                    .map((ailment, index) => (
                      <span key={index}>{`${ailment}, `}</span> //commas between each ailment
                    ))
              : null}
            {ailments.length > 0 &&
            ailments.length !== 1 &&
            ailments.length !== 2
              ? //...and then finally add the last ailment with 'and' in front of it
                ` and ${ailments[ailments.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {specialRequests && specialRequests.length !== 0 ? //double check that this works
            `This personalized tincture will contain personalized herbs, ${specialRequests.toLowerCase()}, and will be of size ${tinctureSize} ***.` 
            : 
            `This personalized tincture will contain personalized herbs, and will be of size ${tinctureSize} ***.` 
            }
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const subServiceSelections = (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You are interested in ${subService}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row">  {/** row is default, this is just more explicit */}
      <Grid
        item
        container
        direction="column"
        lg
        // alignItems={matchesMD ? "center" : undefined}  //centers image on medium screen
        alignItems="center"
      >
        <Grid
          item
          style={{ marginTop: "2em",  }} //marginLeft: matchesMD ? 0 : "5em"
        >
          {/* <Typography variant="h2" align={matchesMD ? "center" : undefined}> */}
          <Typography variant="h2" align="center">
            Consultation
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            // marginRight: matchesMD ? 0 : "10em",
            maxWidth: "50em",
            marginTop: "7.5em"
          }}
        >
          <img src={giftest} alt="gif test" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {questions
          .filter(question => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h2"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginTop: "5em",
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    key={index}
                    component={Button} //this turns the whole grid item into a button component
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "block", //because the default for buttons is side by side
                      textTransform: "none",
                      borderRadius: 0,  //can change this to make the selected have rounder edges?
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.red  //change these red selected to a lighter color
                        : undefined
                    }}
                    direction="column"
                    alignItems="center"
                    md //may change this depending on question (mapped options) layout 
                    //may just have one item at a time instead of three with a yes or no,
                    //or had two items, one that represents yes, and one that represents no
                    //BUT HAVING MULTIPLE SELECT SHOULD MAKE THIS OKAY 
                  >
                    <Grid item style={{ maxWidth: "14em" }}> {/** will change this width after all question titles are done */} 
                      <Typography
                        align="center"
                        variant="h6"
                        style={{
                          lineHeight: 1,
                          marginBottom: "1em"
                        }}
                      >
                        {option.title}
                      </Typography>
                      <Typography align="center" variant="caption">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          item
          container //container outside of just item because container is 100% of the space, and can align items within
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={backButtonDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={backButtonDisabled() ? backArrowDisabled : backArrow}
                alt="Previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={forwardButtonDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={forwardButtonDisabled() ? forwardArrowDisabled : forwardArrow}
                alt="Next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disabled={consultationDisabled()}
            className={classes.consultationButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getConcerns();
              getAilments();
              getSpecialRequests();
              getSubService();
            }}
          >
            Get Consultation
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
      >
        <Grid container justify="center">
          <Grid item style={{ marginTop: "1em" }}>
            <Typography variant="h2" align="center">
              Consultation
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            justify="space-around"
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md={7} //adds up to twelve - 5 space container below
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              {/** 
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              */}
              <Grid item>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  placeholder="Please use this space for any more detail you would like to provide."
                  rows={10}
                  id="message"
                  onChange={event => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                  style={{ lineHeight: 1.1 }}
                >
                  A custom elixir with ingredients based on your answers may cost an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}  {/** will probably end up not showing this total to client **/}
                  </span> 
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Fill out your name and email, use the 'Request Consultation' button, and
                  we’ll get back to you with more details.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={5}
              style={{ maxWidth: "30em" }}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2 //this will be changed when other services/subservices are added
                    ? concernsAndAilmentsSelections
                    : subServiceSelections}
                </Grid>
              </Hidden>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.consultationButton}
                  onClick={sendConsultation}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    //phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <React.Fragment>
                      Request Consultation
                      <img
                        src={send}
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </React.Fragment>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>  {/** cancel is hidden on larger screens, can click outside of modal */}
                <Grid item style={{ marginBottom: matchesSM ? "5em" : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
    </Grid>
  );
}