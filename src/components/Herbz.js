import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Grid, Typography, useMediaQuery} from "@material-ui/core";

import herbs from "../assets/herbs.svg"

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  }
}));

export default function Herbz(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


  //background color on this container won't account for top padding - move this style later
  return (
    <Grid container direction="column" style={{backgroundColor: "#607580"}}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          HERBS!
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg> {/**lg class keeps the two sharing the screen at large size, then break and stack when smaller**/}
          <img
            src={herbs}
            alt="imagalt"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />               {/** the 300 fixed value above is specifically for phone screens **/}
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Title
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, provident dolorum dicta libero dolor reiciendis labore quod quibusdam voluptatem. Quod iusto eum dignissimos ipsa expedita cum autem optio et?
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero veniam necessitatibus placeat, quibusdam, porro est reiciendis, sit sed perspiciatis magni illo? Autem quae vel quas! Et maiores officiis cupiditate deleniti!
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, quam doloremque deleniti fugit error voluptas eaque quidem minus vel adipisci libero illo eum dicta nemo illum magnam amet accusantium molestiae!
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non necessitatibus veniam nostrum ipsam! Atque, tenetur. Rerum nemo consequuntur quasi ut perspiciatis ipsum nulla praesentium. Asperiores culpa incidunt molestiae provident!
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit harum, recusandae itaque blanditiis porro ex nulla voluptate, ut mollitia soluta dignissimos commodi quisquam. Voluptas, deleniti nesciunt. Facilis, distinctio fuga.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Title
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aperiam nesciunt, sint nulla deserunt vero optio temporibus voluptatum atque, excepturi expedita ipsum voluptate debitis dignissimos laboriosam ea quaerat laborum accusamus.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim amet voluptatum doloribus placeat, est recusandae cum molestiae voluptatibus optio saepe dicta dolorum sint adipisci, fugit, dolorem pariatur animi omnis.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde accusantium sint voluptatibus, aliquid, doloribus quod maiores quibusdam, enim deleniti quos a debitis dolore fugit illo distinctio! Iure sit fuga tenetur.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam autem neque, fuga itaque quod placeat facere, illo optio non quas, excepturi ipsa ad cumque dolorem. Illo enim velit iste provident?
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quas voluptatibus reprehenderit facilis ipsa voluptatum, dolorum impedit placeat omnis nemo dolores doloremque perferendis laudantium voluptas exercitationem corrupti! Soluta, possimus dolorum?
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor placeat eum illum perspiciatis inventore delectus recusandae porro excepturi fuga vitae dolorum nostrum iusto veniam cumque molestias incidunt, ducimus deleniti.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Short blerb here blerb blerb blerb blerb
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
          <img
          src={herbs}
          alt="imgalt"
          style={{
            // maxWidth: matchesSM ? 300 : "40em",
            // marginRight: matchesMD ? 0 : "5em",
            // marginBottom: matchesMD ? "5em" : 0
            maxWidth: "40em",
            margin: 0
          }}
        />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Title
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#60807d", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptatibus alias velit possimus veritatis magnam dolorum pariatur, commodi eos incidunt nam sed exercitationem minima optio ab, aliquid, doloribus iusto eligendi!
              this is stuff about the consultation process
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This consultation process will get the blah blah blah blah started blah blah
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque impedit repudiandae doloremque iure quia iusto eius nam dolore accusamus voluptatum, distinctio, delectus ducimus pariatur dicta aliquam eveniet soluta optio nostrum!
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={herbs}
            alt="imagalt"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#607580", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Custom Tinctures?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              something about tinctures just for you, blah blah blah
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Then some stuff about what's next and trying it out
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Then stuff about custom labels and subscriptions and blah blah blah
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={herbs}
            width="100%"
            alt="imagalt"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#606280", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Follow up
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime numquam eos enim fuga ea sequi, id eius natus asperiores? Tempora sequi debitis incidunt iste nobis voluptatem officiis. Modi, suscipit minus.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis aut odit dolor velit qui soluta reprehenderit repellat necessitatibus officiis perspiciatis veritatis, autem eos sit deleniti modi minima, dicta animi.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A few lil blerbs here maybe
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={herbs} alt="imagalt" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#726080", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Title
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem asdfoij Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quis earum eligendi, quae saepe, dolores ab obcaecati magnam rem voluptatibus sequi autem eaque nam voluptate aliquam repudiandae velit! Doloribus, ab!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A blurb about stuff
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={herbs}
            width="100%"
            alt="imagalt"
            style={{ maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#608070", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Title
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Another short thing here
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quisquam? Aperiam deleniti autem dolor temporibus? Fugiat rerum, possimus magni neque error voluptas voluptatum aspernatur. Maiores id rem praesentium ullam quis?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={herbs} alt="imagalt" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#607580", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Making them tincs
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A blurb about good things
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Here we goooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam minus magnam, quae similique iusto nisi aperiam impedit, corrupti eos, tenetur sunt voluptatem veritatis facere harum. Omnis sequi facilis nihil.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Shlurb here
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repellendus explicabo ad, odio iusto ut sint porro quaerat error molestias expedita, atque officia, earum laudantium recusandae dolore a repellat fugit.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ab aspernatur consequatur eaque quidem nihil reiciendis maxime rem blanditiis? Perspiciatis consectetur ratione quia, repellendus molestiae voluptates cupiditate alias. Aperiam, quisquam!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum dolorum sit quod illum, esse ea similique provident eaque reprehenderit sapiente libero molestias aspernatur. Voluptate officiis maiores deleniti necessitatibus porro!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#606280", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Go
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              This is where it goes
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, non veritatis! Inventore officia nemo amet voluptatibus consectetur at illo magni quod voluptas eum obcaecati aut, ipsam ullam eius error voluptates.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aut, at officia a eos consectetur quisquam, cupiditate, ut pariatur excepturi explicabo. Labore quisquam corrupti libero excepturi nesciunt distinctio eligendi repellendus?
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={herbs}
            alt="imagalt"
            style={{ maxWidth: 200 }}
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        justify={matchesMD ? "center" : undefined}
        style={{ backgroundColor: "#726080", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Continuing Care
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Following up blup alup
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lets goooooooooooooo
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, recusandae architecto hic delectus ipsum quis quibusdam maxime ullam itaque praesentium accusamus explicabo ut inventore veniam perferendis. Animi nobis autem quam.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={herbs}
            width="100%"
            alt="imagalt"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ backgroundColor: "#60807d", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesMD ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis laborum laudantium nihil magnam iste praesentium alias optio odit reprehenderit veritatis, quas minima vitae iure adipisci ipsum natus consequuntur officia.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eos et soluta eligendi velit quidem sint impedit explicabo atque animi! Et nostrum tempora velit, suscipit expedita mollitia officiis sunt officia!
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora quos obcaecati quis inventore asperiores mollitia quaerat sed omnis molestiae est consequatur quasi, enim, eum officia! Quae optio doloribus minima.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={herbs} alt="imagalt" width="100%" />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}