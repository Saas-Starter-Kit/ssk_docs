This part of the documentation will address the Machine Learning part of this project, which comes with 2 examples, Basic and Advanced.

The Basic version contains a flask api server and allows the frontend to make api requests to the flask server and get a house price prediction from the machine learning algorithm.

The machine learning algorithm is not created in the flask server. It is instead created in the ML_Modle.ipynb file. The algorithm is generated based on the kc_house_data.csv dataset. The previous historical data allows the machine learning algorithm to make future predictions.

The Advanced version contains the machine learning code itself and a detailed analysis report. Machine Learning is rarely just about the code. Also important is the analysis report and insights of the findings to stakeholders.

**_Note_** ipynb files require jupyter notebook to open. Modifying the machine learning code is not necessary. Simply click on the html files to view the machine learning code.

#### Flask Development Deploy

Install flask
`pip install -U Flask`

Then the Flask server can be started with `flask run`

#### Deployment Options
Flask is meant to be only run in development mode, unlike nodejs you actually have to use a different tech stack when you want to deploy to production.

Machine Learning Model deployments are far too varied and out of the scope of these docs and starter kit. This is only meant to serve as a basic example of how a machine learning model could work in a SAAS app, but unlike the rest of this starter kit it is not meant to be a production ready implementation.
