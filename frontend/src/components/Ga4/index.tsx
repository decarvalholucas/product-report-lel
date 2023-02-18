import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient();

async function runReport(productName: string) {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/312663670`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "itemName",
        },
      ],
      metrics: [
        {
          name: "itemsClickedInList",
        },
        {
          name: "itemsViewedInList",
        },
        {
          name: "cartToViewRate"
        }
      ],
      dimensionFilter: {
        filter: {
          fieldName: "itemName",
          stringFilter: {
            value: "Body Quadrado com Bojo Preto",
          },
        },
      },
    });
    let prodCtr = 0;

    if (typeof response === "object" && Array.isArray(response.rows)) {
      response.rows.forEach((row) => {
        if (
          row.dimensionValues &&
          row.dimensionValues &&
          row.metricValues &&
          row.metricValues[0] &&
          row.metricValues[1]
        )
          //prodCtr = row.metricValues[2].value
            // @ts-ignore Já está sendo verificado no Try Catch, não vai dar problema
            prodCtr = (row.metricValues[0].value / row.metricValues[1].value) * 100;
      });
    }
    return prodCtr.toString().substring(0, 4);
  } catch (error) {
    return "Erro na API do Google";
  }
}

export default async function Ga4({ product }: VtexProduct) {
  try {
    const crt = await runReport(product[0].productName);
    console.log(`$CTR do produto: %${crt}`)
    return <h3>CTR do produto: {crt}%</h3>;
  } catch (error) {
    const crt = "Algum erro na API do Google";
    return <h3>CTR do produto: {crt}</h3>;
  }
}
