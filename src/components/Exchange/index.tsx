import React from "react";
import { Grid, Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import useAxios from "axios-hooks";
import PrimaryChart from "components/PrimaryChart";
import SecondaryChart from "components/SecondaryChart";
import TimeFilterButtons from "components/TimeFilterButtons";
import { useHistory } from "react-router-dom";
import { DataProps } from "interfaces/DataProps";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useQueryParams, StringParam } from "use-query-params";
import { MarketContext } from "store/MarketProvider";






  const Exchange = () => {

    const [queryParams] = useQueryParams({
      id: StringParam,
      name: StringParam,
    });
    const history = useHistory();

    const [{ data, loading, error }, fetch] = useAxios(
      {
        url: `https://api.coingecko.com/api/v3/derivatives/exchanges/${queryParams?.id}?include_tickers=all`,
        method: "GET",
      },
      { manual: true }
    );





    const TableHeader = () => {
      return (

        <h1> {queryParams?.name}</h1>

      );
    };


  };
  export default Exchange;
