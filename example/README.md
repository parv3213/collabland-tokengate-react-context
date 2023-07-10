# Collab Token Gated Page Demo

This GitHub repository contains a demo page for testing the Collab Token Gated Page API. The demo allows you to create a token-gated page where users need to possess specific tokens to access its content.

## Setup

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/your-username/collab-token-gated-page-demo.git

2. Navigate to the project's directory:

cd collab-token-gated-page-demo

3. Install the required dependencies using npm:

npm install

4. Obtain the necessary API keys:

- Visit [WalletConnect Cloud](https://cloud.walletconnect.com/) and sign in to create a new project. Make a note of the project name and project ID.
- Visit the [CollabLand API Dev Portal](https://dev-portal.collab.land/signin) and sign in to obtain an API key.

5. Create a `.env` file in the project's root directory and fill it with the obtained API keys:

NEXT_PUBLIC_COLLAB_LAND_API_KEY=YOUR_COLLAB_LAND_API_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_NAME=YOUR_WALLET_CONNECT_PROJECT_NAME
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

6. Start the development server:

npm run dev

7. Access the demo page by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

Once the project is running and you have accessed the demo page, you can interact with the token-gated page. Users will need to possess specific tokens to gain access to the page's content. The page will verify token ownership through the Collab Token Gated Page API.

Feel free to explore and test different scenarios related to token ownership and access restrictions.

## Contributing

If you would like to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make the necessary changes and commit them.
4. Push your branch to your forked repository.
5. Submit a pull request to the main repository.

## Issues

If you encounter any issues while using the demo or have any suggestions for improvements, please open an issue in the GitHub repository's issue tracker.

## License

This project is licensed under the [MIT License](LICENSE).
