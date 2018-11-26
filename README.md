# Rubykube New UI

## Installation steps

1. git clone https://github.com/adarshdubeytech/Rubykube-New-Ui
2. cd Rubykube-New-Ui
3. bundle Install
4. Search for 'cryptodealexchange.in' in the repository (use the search bar above) and make sure you replace all instances of it with your application URL (will be moving to ENV variables soon)

 `Use This Command:`
 `find ./ -type f -exec sed -i -e 's/cryptodealexchange.in/yourdomain.com/g' {} \;`

5. For production, you can do rake assets:precompile RAILS_ENV=production
6. bundle exec rails server -p 4000

View a working version of this UI at https://cryptodealexchange.in/trading/ethbtc

If it tells you to log in, just try the link again.

# To do: 
## `Tradingview integration`