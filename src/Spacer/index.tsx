import Grid from "@mui/material/Grid";

import Wrapper from "../Common/components/Wrapper";

const Spacer = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Wrapper title="1"></Wrapper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Wrapper title="2"></Wrapper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Wrapper title="3"></Wrapper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <Wrapper title="4"></Wrapper>
      </Grid>
    </>
  );
};

export default Spacer;
