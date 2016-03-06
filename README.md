# Front-end Javascript Testing

Goals:

1. Unit tests
2. Integrations tests

The libraries used for both of them have been
kept as similar as possible to each other.
In fact, only the runner library differs,
but the framework and assertions libraries used are the same.

## Unit testing

Unit tests will need to test individual functions (white-box) using:

- Runner: Karma
- Framework: Mocha
- Assertions: Chai Expect, Chai-as-promised

Individual functions will be required,
and tested in isolation.
This is white box testing,
as we are concerned with the internal details of how each function works.
Karma is used as the test runner
rather than Mocha directly,
because we need access browser functionality.

## Integration testing

Integration tests will need to test entire application (black-box) using:

- Runner: Webdriver.io
- Framework: Mocha
- Assertions: Chai Expect, Chai-as-promised

The entire application will be run,
and tests will simulation actual usage of the web site.
This is black box testing,
as we are not concerned with the details of how the application works,
just the end results.
Webdriver.io is used as the test runner,
rather than Mocha directly,
because it is used to interface with a selenium server.

## Author

[Brendan Graetz](http://bguiz.com)

## Licence

GPL-3.0
