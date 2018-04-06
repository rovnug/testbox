#!/bin/sh
#2017-01-22 18.00

sudo apt-get update -y
#gets Raspian updates

sudo apt-get upgrade -y
#installs Raspian updates

sudo apt-get install vsftpd -y
#installs ftp programme

#sudo apt-get install mysql-server mysql-client -y

sudo apt-get install php libapache2-mod-php apache2 -y
#installs webserver and php library

sudo apt-get install php7.0-sqlite3
#installs sqlite3

sudo apt-get install mariadb-server

sudo systemctl enable ssh
sudo systemctl start ssh

sudo a2enmod rewrite
#activates mod_rewrite

sudo systemctl restart apache2
#restarts apache2

sudo rm -rf /var/www/html

#sudo ln -s  /home/pi/ipv6box/htdocs /var/www/html
sudo ln -s  /home/pi/ipv6box/htdocs /var/www/html/htdocs
#symlink from our source-code to the html-directory

sudo sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

sudo a2enmod ssl
#install mod_ssl and Listen 443 in /etc/apache2/ports.conf
sudo a2ensite default-ssl
# activate

sudo chmod -R 755 /home/pi/ipv6box
#restores file permissions

sudo systemctl restart apache2
#restart apache

#https://www.modmypi.com/blog/how-to-give-your-raspberry-pi-a-static-ip-address-update
#fixa i /etc/dhcpcd.conf
#fixa i /etc/apache2/ports conf
# sudo service networking restart
echo "installation ok, the system will restart" | sudo tee -a /boot/config.txt

sudo reboot
