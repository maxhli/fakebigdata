# oneLiner

def oneLiner(inputFileName, outputFileName)
  fin = File.open(inputFileName, 'r')
  fin.rewind
 
  fout = File.open(outputFileName, 'w')
  
  fin.each do |line|
    # get rid of blank space ( ) and newline
    cleanLine = line.gsub(/\s+/, "")
	# we don't want to use puts because a newline is added. write will
	# NOT write a newline.
    fout.write cleanLine
  end
  
  fin.close
  fout.close

end


oneLiner ( ARGV[0], ARGV[2])

## testing
#oneLiner('data/fibonacci101235W70L5R5.txt', 'fibonacci101235.txt')


#testing