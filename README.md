# Rubykube New UI

## Installation steps

1. `git clone https://github.com/adarshdubeytech/Rubykube-New-Ui`
2. `cd Rubykube-New-Ui`
3. `bundle install`
4. Search for 'cryptodealexchange.in' in the repository and make sure you replace all instances of it with your domain
 ## Use This Command:
 `find ./ -type f -exec sed -i -e 's/cryptodealexchange.in/yourdomain.com/g' {} \;`

5. `chmod +x bin/*`
6. `bin/setup`
7. `bin/init_config`
8. `bundle exec rake assets:precompile`
9. `bundle exec rails server -p 4000`

View a working version of this UI at https://cryptodealexchange.in/trading/ethbtc

# To do: 
## `Tradingview integration`
