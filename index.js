require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const {
  Text,
  Password,
  Checkbox,
  Relationship,
  Select,
  Decimal,
  Float,
} = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
// const { StaticApp } = require("@keystonejs/app-static");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { NextApp } = require("@keystonejs/app-next");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const PROJECT_NAME = "Realtime Quiz";
const adapterConfig = {
  mongoUri: process.env.DB_URI,
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList("User", {
  schemaDoc: "Players in the quiz game",
  fields: {
    username: {
      type: Text,
      schemaDoc: `Players's username to login and play`,
      isRequired: true,
      isUnique: true,
    },
    password: {
      type: Password,
      schemaDoc: `Players's password to login and play`,
      isRequired: true,
    },
    isAdmin: {
      type: Checkbox,
      schemaDoc: `User's right to access Admin UI`,
      isRequired: true,
    },
    score: {
      type: Float,
      schemaDoc: `Player's overall score after the game`
    }
  },
  labelField: "username",
});

keystone.createList("Question", {
  schemaDoc: "Questions to use in the quiz",
  fields: {
    ask: {
      type: Text,
      isRequired: true,
      schemaDoc: `The question`
    },
    answer: {
      type: Text,
      isRequired: true,
      schemaDoc: `The correct answer of the question`
    },
    score: {
      type: Float,
      schemaDoc: `The score for this question if the player answered correctly`
    }
  },
  labelField: "ask",
});

keystone.createList("Game", {
  schemaDoc: "Games for the players to join in",
  fields: {
    name: {
      type: Text,
      schemaDoc: `Name of the game`,
      isRequired: true,
      isUnique: true,
    },
    active: {
      type: Checkbox,
      schemaDoc: `Players can only access the game if it is active`,
      isRequired: true,
    },
    type: {
      type: Select,
      options: `Image guesssing, Multi-choices`,
      dataType: "string",
      schemaDoc: `Type of the game: Multichoices, Image guessing, etc.`,
      isRequired: true,
    },
    timer: {
      type: Decimal,
      schemaDoc: `A timer for the game if necessary`,
    },
    players: {
      type: Relationship,
      ref: "User",
      many: true,
      schemaDoc: `Players allowed to join the game`,
    },
    questions: {
      type: Relationship,
      ref: "Question",
      many: true,
      schemaDoc: `Questions using in the game`,
    },
  },
  labelField: "name",
});

keystone.createList('Result', {
  schemaDoc: `Store the results of the games`,
  fields: {
    game: {
      type: Relationship,
      ref: 'Game',
      schemaDoc: `Game to get results from`,
      isRequired: true
    },
    player: {
      type: Relationship,
      ref: 'User',
      schemaDoc: `Player to get results from`,
      isRequired: true
    },
    question: {
      type: Relationship,
      ref: 'Question',
      schemaDoc: `Question that the player answered`,
      isRequired: true
    },
    answer: {
      type: Text,
      schemaDoc: `Answer of the player`
    },
    isCorrect: {
      type: Checkbox,
      isRequired: true,
      schemaDoc: `Is the player's answer correct`
    },
    time: {
      type: Float,
      schemaDoc: `Time takes the player to answer`
    }
  }
})

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identityField: "username",
    secretField: "password",
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: false,
      isAccessAllowed: ({ authentication: { item: user, listKey: list } }) =>
        !!user && !!user.isAdmin,
      authStrategy: authStrategy,
      hooks: require.resolve('./custom-hooks')
    }),
    new NextApp({ dir: "client-app" }),
  ],
};
