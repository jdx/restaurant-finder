require 'geocoder'
require 'awesome_print'

result = Geocoder.search(ARGV[0])

ap result
