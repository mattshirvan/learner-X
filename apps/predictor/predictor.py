import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model

def predictor(files, first, second, third, size, separator):
    # read csv into pandas
    data = pd.read_csv(files, sep=separator)

    # set attributes
    data = data[["G1", "G2", "G3", first, second, third]]

    # set prediction labels
    predict = "G3"

    # set labels
    x = np.array(data.drop([predict], 1))
    y = np.array(data[predict])

    # training and testing data
    x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x, y, test_size=float(size))

    # training model
    linear = linear_model.LinearRegression()

    # line of best fit
    linear.fit(x_train, y_train)

    # linear regression test score
    accuracy = linear.score(x_test, y_test)
    print('Accuracy: ', accuracy)

    # find coefficient and intercept
    print('Coefficient: \n', linear.coef_)
    print('Intercept: \n', linear.intercept_)

    # predictions list
    predictions = linear.predict(x_test)

    # results
    results = {
        "accuracy": accuracy, 
        "coefficient": linear.coef_, 
        "intercept": linear.intercept_,
        "predictions": predictions, 
        "test": x_test, 
        "predicted": y_test,
    }

    return results 
