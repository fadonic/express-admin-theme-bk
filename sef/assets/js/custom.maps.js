 $(function () {

          /* Africa Map  */

            $('#mapAfrica').vectorMap({
            map: 'africa_mill',
            backgroundColor: 'transparent',
            regionStyle: {
               initial: {
               fill: '#243b52'
                },
              hover: {
               fill: "#A0D1DC"
                },
               },
            });


            /* Asia map */

            $('#mapAsia').vectorMap({
            map: 'asia_mill',
            backgroundColor: 'transparent',
            regionStyle: {
               initial: {
               fill: 'purple'
                },
              hover: {
               fill: "#A0D1DC"
                },
               },
            });


            /* world map */

            $('#mapWorld').vectorMap({
            map: 'world_mill',
            backgroundColor: 'transparent',
            regionStyle: {
               initial: {
               fill: 'gray'
                },
              hover: {
               fill: "#A0D1DC"
                },
               },
            });

            /* continents map */

            $('#mapContinents').vectorMap({
            map: 'continents_mill',
            backgroundColor: 'transparent',
            regionStyle: {
               initial: {
               fill: 'brown'
                },
              hover: {
               fill: "#A0D1DC"
                },
               },
            });

             /* uk countries map */

            $('#mapUk').vectorMap({
            map: 'uk_countries_mill',
            backgroundColor: 'transparent',
            regionStyle: {
               initial: {
               fill: '#128da7'
                },
              hover: {
               fill: "#A0D1DC"
                },
               },
            });


         });